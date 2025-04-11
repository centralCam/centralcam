import Link from "next/link";
import React from "react";

const SobreMi = () => {

  const ofrece = [
    "Envíos a todo el país",
    "Garantía de calidad",
    "Atención personalizada",
    "Todos los medios de pago",
  ];

  return (
    <section id="sobre" className="shadow-xl shadow-blue-50 " style={{textAlign:"-webkit-center"}}>
      <article className="bg-primary-background">
        <div className="py-8 px-8 mx-auto max-w-screen-xl  sm:py-16 lg:px-6">
          <div className="max-w-screen-xl">
            <h2 className="mb-4  text-3xl md:text-4xl text-center md:text center tracking-tight font-extrabold text-text-primary-title">Acerca de Nosotros</h2>
            <p className="mb-8 text-gray-700 sm:text-lg font-light text-justify">En <strong className="text-text-danger font-bold">CENTRAL CAM</strong>,  somos especialistas en la venta de <strong>repuestos para camiones</strong> y vehículos de <strong>transporte pesado</strong> en Mar del Plata, Argentina. Contamos con una amplia variedad de piezas de alta calidad, incluyendo sistemas de frenos, embragues, motores, filtros y más. Nuestro compromiso es garantizar la <strong>seguridad y el rendimiento</strong> de tu flota, ofreciendo <strong>envíos rápidos</strong> a todo el país, atención personalizada y precios competitivos.</p>
            <Link href={'/nosotros'}>
              <button className="text-white font-medium rounded-lg text-sm px-3 py-1.5 text-center bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active" target='_blank' title='Consulta'>Ver mas</button>
            </Link>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div>
                <h2 className="mb-2 text-lg text-start font-semibold text-text-primary-title">¿Qué ofrecemos?</h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                  {ofrece.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-3.5 h-3.5 mr-2 text-primary-whats flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SobreMi;
