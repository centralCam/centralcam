import React from "react";
import Link from "next/link";

const NosotrosPage = () => {
  const descripcion = `En <strong class="text-text-danger font-bold">CENTRAL CAM</strong>, nos especializamos en ofrecer una amplia gama de repuestos de alta calidad para camiones y vehículos pesados. Nuestra prioridad es proporcionar soluciones confiables que garanticen la seguridad y el rendimiento de tus vehículos, respaldados por nuestra experiencia en el sector y el compromiso con la excelencia.`;

  const valores = [
    {
      titulo: "Compromiso",
      descripcion:
        "Estamos dedicados a garantizar la satisfacción de nuestros clientes con productos de calidad y atención personalizada.",
    },
    {
      titulo: "Calidad",
      descripcion:
        "Solo trabajamos con marcas y repuestos que cumplen con los más altos estándares de la industria.",
    },
    {
      titulo: "Confianza",
      descripcion:
        "Más de 20 años de experiencia nos avalan como líderes en repuestos para camiones.",
    },
  ];

  const servicios = [
    "Envíos rápidos y seguros a todo el país",
    "Presupuestos gratuitos sin compromiso",
    "Atención especializada para resolver tus consultas",
    "Variedad de medios de pago: tarjetas, transferencias y efectivo",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="py-12 px-4 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-blue-700">Sobre Nosotros</h1>
          <p
            className="text-lg font-light text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: descripcion }}
          ></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {valores.map((valor, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{valor.titulo}</h3>
              <p className="text-gray-600">{valor.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Nuestros Servicios
          </h2>
          <ul className="list-disc list-inside mx-auto max-w-2xl text-gray-600">
            {servicios.map((servicio, index) => (
              <li key={index} className="mb-2">
                {servicio}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 mx-auto max-w-screen-xl  lg:px-6 text-gray-700">
              <p>
                Si estás buscando <strong className="text-text-danger font-bold">repuestos para camiones en Mar del Plata</strong>, no busques más. En <strong className="text-text-danger font-bold" >CENTRAL CAM</strong>, ofrecemos una gran variedad de productos para mantener tus vehículos pesados en óptimas condiciones. Atendemos tanto a clientes locales como a transportistas de toda Argentina. ¡Visítanos en Av. Champagnat 1167 o realiza tu pedido online hoy mismo!
              </p>
        </div>
        <div className="mt-8 text-center">
          <Link href="/#contacto" title="Ir a contacto" aria-label="Ir a contacto">
            <button className="bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Contáctanos
            </button>
          </Link>
        </div>

      </section>
    </div>
  );
};

export default NosotrosPage;
