
import React, { Suspense } from "react";
import Banner from "@/components/Banner/Banner";
import BotonWsp from "@/components/BotonWSP/BotonWsp";
import Carrusel from "@/components/Carrusel/Carrusel";
import Destacados from "@/components/Destacados/Destacados";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Sobre from "@/components/SobreMi/Sobre";
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
        <Suspense fallback={<Loading/>}>
          <NavBar  />
        </Suspense>
      </nav>
      <main>
        <Suspense fallback={<Loading/>}>
          <SearchTienda />
          <Banner />
          <Destacados />
          <Tienda />
          <Carrusel />
          <Sobre/>
          <Ubicacion/>
          <Contact />
        </Suspense>
      </main>
      <footer>
        <Footer />
        <VolverArriba />
        <BotonWsp />
      </footer>
    </>
  );
}
