// Archivo: components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <section id='home' className="relative w-full min-h-96 bg-cover bg-right flex items-center justify-center mt-[-65px] opacity-90 md:bg-[url('/bg/bg-banner.webp')] bg-[url('/bg/bg-sm-banner.webp')]">
      <div className="absolute inset-0"></div>
      <article className="text-center z-10 m-2 p-2 max-w-[600px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent font-bold mb-4 bg-clip-text bg-gradient-to-r from-boton-primary via-boton-secondary to-boton-primary">CENTRAL CAM<br/>REPUESTOS</h2>
        <h1 className="text-lg sm:text-xl text-white font-semibold ">La más amplia variedad de repuestos para camiones:</h1>
        <span className="text-md md:text-xl text-white font-semibold "> calidad, durabilidad y confiabilidad en cada pieza.</span>
      </article>
    </section>
  );
};

export default Banner;
