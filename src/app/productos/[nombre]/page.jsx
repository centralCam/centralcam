import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { defaultMetadata } from '../../../lib/metadata';
import  fetchProduct  from '../../../Utils/fetchProduct';
import Footer from '@/components/Footer/Footer';
import VolverArriba from '@/components/VolverArriba/VolverArriba';
import BotonWsp from '@/components/BotonWSP/BotonWsp';
import NavBar from '@/components/NavBar/NavBar';
import { Suspense } from 'react';
import Loading from '@/components/Loading/Loading';

const Modal = dynamic(() => import('../../../components/Tienda/Modal/Modals'));

// ✅ `generateMetadata` usa valores dinámicos y valores por defecto
export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.nombre);
  //console.log('producto de meta:', product);
  
  if (!product) {
    return {
      ...defaultMetadata,
      title: 'Producto no encontrado',
      description: 'No se encontró el producto solicitado.',
      robots: 'noindex, nofollow',
    };
  }

  return {
    ...defaultMetadata, // Usa los valores por defecto si no están definidos en el producto
    title: `${product.nombre} - ${product.modelo} - ${product.categoria} - ${product.marca} - E-CentralCam` || defaultMetadata.title,
    description: product.nombre? `${product.nombre} - ${product.modelo} - ${product.categoria} - ${product.marca} - CentralCam ${product.descripcion.slice(0, 200)}`: defaultMetadata.description,
    keywords: `${product.titulo_de_producto} - CentralCam ${product.descripcion.slice(0, 200)}` || defaultMetadata.keywords,
    icons: [{ url: product.foto_1_1 || defaultMetadata.openGraph.images[0].url }],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${product.nombre} - ${product.modelo} - ${product.categoria} - ${product.marca} - E-CentralCam` || defaultMetadata.openGraph.title,
      description: product.nombre? `${product.nombre} - ${product.modelo} - ${product.categoria} - ${product.marca} - CentralCam ${product.descripcion.slice(0, 200)}`: defaultMetadata.description,
      images: [{ url: product.foto_1_1 || defaultMetadata.openGraph.images[0].url }],
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/productos/${params.nombre}`,
      type: 'website',
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${product.nombre} ` || defaultMetadata.twitter.title,
      description: product.nombre? `${product.nombre} - ${product.modelo} - ${product.categoria} - ${product.marca} - CentralCam ${product.descripcion.slice(0, 200)}`: defaultMetadata.description,
      images: [{ url: product.foto_1_1 || defaultMetadata.twitter.images[0].url }],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/productos/${params.nombre}`,
    },
  };
}

export default async function ProductoPage({ params }) {
  const product = await fetchProduct(params.nombre);

  if (!product) return notFound(); // Muestra la página 404 si el producto no existe

  return (
    <>
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
