'use client'
import React, { useState } from "react";

const PreguntasFrecuentes = () => {
  const [accordionOpen, setAccordionOpen] = useState({
    1: false,
    2: false,
    3: false,
  });
  const faqData = [
    {
      id: 1,
      question: "¿Qué tipo de repuestos para camiones venden?",
      answer:
        "Ofrecemos piezas como frenos, embragues, filtros, repuestos para motores, luces, y más. Trabajamos con marcas reconocidas en el mercado.",
    },
    {
      id: 2,
      question: "¿Hacen envíos a todo el país?",
      answer:
        "Sí, realizamos envíos rápidos y seguros a cualquier lugar de Argentina, asegurando que tus repuestos lleguen en perfectas condiciones.",
    },
    {
      id: 3,
      question: "¿Dónde están ubicados?",
      answer:
        "Estamos en Mar del Plata, en Av. Champagnat 1167, pero atendemos a clientes de toda Argentina a través de nuestra tienda online.",
    },{
      id: 4,
      question: "¿Aceptan todos los medios de pago?",
      answer:
        "Sí, aceptamos tarjetas de crédito, débito, transferencias bancarias y efectivo.",
    },
  ];

  const toggleAccordion = (accordionId) => {
    setAccordionOpen((prevState) => ({
      ...prevState,
      [accordionId]: !prevState[accordionId],
    }));
  };

  return (
    <div className="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6 overflow-y-auto max-auto " style={{textAlign:"-webkit-center"}}>
      <div className="max-w-screen-md" >
        <div id="accordion-open" data-accordion="open">
          <h2 className="mb-4 text-3xl md:text-4xl text-center md:text-start tracking-tight font-extrabold text-text-primary-title">Preguntas frecuentes</h2>
          {faqData.map((faq) => (
            <div key={faq.id} className="mb-4 border border-gray-200 rounded-xl">
              <h2 id={`accordion-open-heading-${faq.id}`}>
                <button type="button" className="flex items-center justify-between w-full p-4 font-medium text-gray-600 bg-gray-50 rounded-t-xl focus:outline-none" onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={accordionOpen[faq.id]} aria-controls={`accordion-open-body-${faq.id}`}>
                  <span className="flex items-center">
                    <svg className={`w-5 h-5 mr-2 transition-transform ${accordionOpen[faq.id] ? "rotate-180 text-text-primary-active" : "" }`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    {faq.question}
                  </span>
                  <svg className={`w-5 h-5 ml-2 transition-transform ${accordionOpen[faq.id] ? "" : "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={accordionOpen[faq.id]? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
                  </svg>
                </button>
              </h2>
              <div id={`accordion-open-body-${faq.id}`} className={`${accordionOpen[faq.id] ? "block" : "hidden" } bg-white border-t border-gray-200`} aria-labelledby={`accordion-open-heading-${faq.id}`} >
                <div className="p-4">
                  <p className="mb-2 text-gray-700">{faq.answer}</p>
                  {faq.linkText && (
                    <p className="mb-2 text-gray-700">
                      <a href={faq.linkUrl} className="text-blue-600 hover:underline" target="_blank" title={faq.linkText}>{faq.linkText}</a>
                    </p>
                  )}
                  {faq.additionalInfo && (
                    <div>
                      <p className="mb-2 text-gray-700">{faq.additionalInfo[0].text}</p>
                      <ul className="pl-4 text-gray-700 list-disc">{faq.additionalInfo[0].links.map((link, index) => (
                          <li key={index}><a href={link.url} className="text-blue-600 hover:underline" title={link.text} >{link.text}</a> </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
