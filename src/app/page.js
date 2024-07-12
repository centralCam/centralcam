
import React, { Suspense } from "react";
import Banner from "@/components/Banner/Banner";
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import Carrusel from "@/components/Carrusel/Carrusel";
import Destacados from "@/components/Destacados/Destacados";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Sobre from "@/components/Sobre/Sobre";
import Ubicacion from "@/components/Ubicacion/Ubicacion";
import NavBar from "@/components/NavBar/NavBar";
import SearchTienda from "@/components/Search/SearchTienda";
import Tienda from "@/components/Tienda/Tienda";
import VolverArriba from "@/components/VolverArriba/VolverArriba";
import Loading from "@/components/Loading/Loading";

export default function Home() {

  return (
    <>
      <nav>
        <NavBar  />
      </nav>
      <main>
        {/* <SearchTienda /> */}
        <Banner />
        {/* <Suspense fallback={<Loading/>}>
          <Destacados />
          <Tienda />
        </Suspense>*/}
        <Carrusel />
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
