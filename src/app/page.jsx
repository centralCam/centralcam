
import React, { Suspense } from "react";
import Banner from "@/components/Banner/Banner";
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import Destacados from "@/components/Destacados/Destacados";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Sobre from "@/components/SobreMi/Sobre";
import Ubicacion from "@/components/Ubicacion/Ubicacion";
import NavBar from "@/components/NavBar/NavBar";
import Tienda from "@/components/Tienda/Tienda";
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import Loading from "@/components/Loading/Loading";
import SearchBase from "@/components/Search/SearchBase";
import { defaultMetadata } from '../lib/metadata';
import fetchProduct from '../Utils/fetchProduct';

//import UnderConstruction from "@/components/sitioEnConstruccion/UnderConstruction";

export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.nombre);
  if (!params || !params.nombre) return defaultMetadata;
  //console.log('producto de meta:', product);

  return {
    ...defaultMetadata, // Usa los valores por defecto si no están definidos en el producto
    title: `${product.nombre} - ${product.modelo} - ${product.categoria} - ${product.marca} - E-ShopDevices` || defaultMetadata.title,
    description: product.nombre? `${product.nombre} - ${product.modelo} - ${product.categoria} - ${product.marca} - CentralCam ${product.descripcion.slice(0, 200)}`: defaultMetadata.description,
    keywords: `${product.titulo_de_producto} - CentralCam ${product.descripcion.slice(0, 200)}` || defaultMetadata.keywords,
    icons: [{ url: product.foto_1_1 || defaultMetadata.openGraph.images[0].url }],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${product.nombre} - ${product.modelo} - ${product.categoria} - ${product.marca} - E-ShopDevices` || defaultMetadata.openGraph.title,
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

export default function Home() {

  return (
    <>
      <nav>
        <Suspense fallback={<Loading/>}>
          <NavBar  />
        </Suspense>
      </nav>
      <main>
        <Suspense fallback={<Loading/>}>
          <SearchBase />
        </Suspense>
          <Banner />
        <Suspense fallback={<Loading/>}>
          {/* <UnderConstruction /> */}
          <Destacados />
          <Tienda />
        </Suspense>
          {/* <Carrusel /> */}
          <Sobre/>
          <Ubicacion/>
          <Contact />
      </main>
      <footer>
        <Footer />
        <VolverArriba />
        <BotonWsp />
      </footer>
    </>
  );
}
