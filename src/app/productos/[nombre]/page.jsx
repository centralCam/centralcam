import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { defaultMetadata } from '../../../lib/metadata';
import Footer from '../../../components/Footer/Footer';
import  fetchProduct  from '../../../Utils/fetchProduct';
import VolverArriba from '../../../components/VolverArriba/VolverArriba';
import BotonWsp from '../../../components/BotonWSP/BotonWsp';
import NavBar from '../../../components/NavBar/NavBar';
import Loading from '../../../components/Loading/Loading';

const Modal = dynamic(() => import('../../../components/Tienda/Modal/Modals'));
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://centralcamshop.com/';

const clean = (s = '') => String(s).replace(/\s+/g, ' ').trim();
const truncate = (s = '', n = 180) => {
  if (!s) return '';
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  const i = cut.lastIndexOf(' ');
  return (i > 50 ? cut.slice(0, i) : cut).trim() + '…';
};
const toAbs = (u = '') => { try { return new URL(u, SITE).toString(); } catch { return null; } };

export async function generateMetadata({ params }) {
  const rawSlug = params?.nombre || '';
  const decoded = decodeURIComponent(rawSlug);
  const nameFromSlug = clean(decoded.replace(/_/g, ' '));

  let product = null;
  try {
    product = await fetchProduct(nameFromSlug);
  } catch (e) {
    console.error('generateMetadata fetchProduct error:', e);
  }

  const metadataBase = new URL(SITE);
  const canonical = new URL(`productos/${encodeURIComponent(rawSlug)}`, metadataBase).toString();

  if (!product) {
    return {
      ...defaultMetadata,
      metadataBase,
      title: 'Producto no encontrado | CentralCam',
      description: 'No se encontró el producto solicitado.',
      alternates: { canonical },
      robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
      openGraph: {
        ...(defaultMetadata.openGraph || {}),
        title: 'Producto no encontrado | CentralCam',
        description: 'No se encontró el producto solicitado.',
        url: canonical,
        type: 'website',
      },
    };
  }

  const nombre = clean(product.nombre || nameFromSlug);
  const modelo = clean(product.modelo || '');
  const categoria = clean(product.categoria || '');
  const marca = clean(product.marca || 'CentralCam');

  const title = [nombre, modelo, categoria, marca, 'CentralCam'].filter(Boolean).join(' - ');
  const descSrc = clean(product.descripcion || '');
  const description = truncate(descSrc ? `${title} — ${descSrc}` : title, 180);

  const defaultOg = defaultMetadata?.openGraph?.images?.[0];
  const defaultOgUrl =
    (typeof defaultOg === 'string' ? defaultOg : defaultOg?.url) ||
    'https://centralcamshop.com/og/og-centralcam.png';
  const foto = toAbs(product.foto_1_1) || defaultOgUrl;

  const keywords = Array.from(new Set([
    nombre, modelo, categoria, marca,
    'Repuestos para camiones', 'accesorios para camiones', 'Repuestos', 'Argentina', 'CentralCam', 'tienda de repuestos', 'vehículos pesados','Mar del Plata'
  ])).filter(Boolean).join(', ');

  return {
    ...defaultMetadata,
    metadataBase,
    title,
    description,
    keywords,
    openGraph: {
      ...(defaultMetadata.openGraph || {}),
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: 'CentralCam',
      locale: 'es_AR',
      images: [{ url: foto, width: 1200, height: 630, alt: `${nombre} - ${marca}` }],
    },
    twitter: {
      ...(defaultMetadata.twitter || {}),
      title,
      description,
      images: [foto],
      card: 'summary_large_image',
    },
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
  };
}
export default async function ProductoPage({ params }) {
  const rawSlug = params?.nombre || '';
  const nameFromSlug = clean(decodeURIComponent(rawSlug).replace(/_/g, ' '));

  let product = null;
  try {
    product = await fetchProduct(nameFromSlug);
  } catch (e) {
    console.error('ProductoPage fetchProduct error:', e);
  }

  if (!product) return notFound();

  // Generar JSON-LD para el producto
  const nombre = clean(product.nombre || '');
  const modelo = clean(product.modelo || '');
  const categoria = clean(product.categoria || '');
  const marca = clean(product.marca || 'CentralCam');
  const descripcion = clean(product.descripcion || '');
  const foto = toAbs(product.foto_1_1) || 'https://centralcamshop.com/og/og-centralcam.png';
  
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": nombre,
    "image": [
      foto,
      toAbs(product.foto_1_2),
      toAbs(product.foto_1_3),
      toAbs(product.foto_1_4)
    ].filter(Boolean),
    "description": descripcion,
    "sku": product.cod_producto || product._id,
    "mpn": product.cod_producto,
    "brand": {
      "@type": "Brand",
      "name": marca
    },
    "category": categoria,
    "offers": {
      "@type": "Offer",
      "url": `${SITE}productos/${encodeURIComponent(rawSlug)}`,
      "priceCurrency": "ARS",
      "price": product.precio || "0",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "availability": product.vendido ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "CENTRAL CAM",
        "url": SITE
      }
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount || 1
    } : undefined
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": SITE
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Productos",
        "item": `${SITE}productos`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": categoria || "Categoría",
        "item": `${SITE}productos?categoria=${encodeURIComponent(categoria)}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": nombre,
        "item": `${SITE}productos/${encodeURIComponent(rawSlug)}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav>
        <Suspense fallback={<Loading/>}>
          <NavBar  />
        </Suspense>
      </nav>
      <main className="flex-1 flex items-center justify-center bg-white">
        <Modal selectedProduct={product} isDialog={false} />
      </main>
      <footer className="flex flex-col">
        <Footer />
        <VolverArriba />
        <BotonWsp />
    </footer>
    </>
  );
}
