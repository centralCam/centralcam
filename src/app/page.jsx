
import React, { Suspense } from "react";
import Banner from "../components/Banner/Banner";
import BotonWsp from "../components/BotonWSP/BotonWsp";
import Destacados from "../components/Destacados/Destacados";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Sobre from "../components/SobreMi/Sobre";
import Ubicacion from "../components/Ubicacion/Ubicacion";
import NavBar from "../components/NavBar/NavBar";
import Tienda from "../components/Tienda/Tienda";
import VolverArriba from "../components/VolverArriba/VolverArriba";
import Loading from "../components/Loading/Loading";
import SearchBase from "../components/Search/SearchBase";
import { defaultMetadata } from '../lib/metadata';
import fetchProduct from '../Utils/fetchProduct';

//import UnderConstruction from "@/components/sitioEnConstruccion/UnderConstruction";

export async function generateMetadata() {
  // La página principal no necesita metadata dinámica de productos
  return {
    ...defaultMetadata,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://centralcamshop.com'),
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
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
