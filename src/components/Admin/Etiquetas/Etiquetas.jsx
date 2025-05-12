import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import userData from '@/app/constants/userData';

function Etiquetas({ data }) {
  return (
    <div className="w-[9.5cm] h-[7cm] border border-primary p-2 rounded-md text-sm font-medium gap-2 m-2 justify-between">
      <div className="bg-primary text-white text-lg font-bold px-2 py-1 flex justify-between items-center rounded-md">
        <span>ENVÍO</span>
        <span className="text-2xl rotate-90">↷</span>
      </div>
      <div className="mt-2 justify-between">
        <div className='flex justify-between mt-1'><strong>PARA:</strong> {data.para}</div>
        <div className='flex justify-between mt-1'><strong>Direccion:</strong> {data.direccion}</div>
        <div className="flex justify-between mt-1"><strong>DE:</strong> {data.de}</div>
        <div className="flex justify-between mt-1"><strong>BULTOS <small>total</small>:</strong> {data.total}</div>
        <div className="mt-1 flex justify-between">
          <div><strong>DESPACHAR POR:</strong><br />{data.despacharPor}</div>
        </div>
        <div className="mt-2 flex justify-around gap-1">
          <div><strong>KILOS <small>total</small>: </strong><br />{data.kilos} kg.</div>
          <div><strong>BULTO N°: </strong><br />{data.bultoN}</div>
        </div>
      </div>
    </div>
  );
}

export default function EtiquetaFormPDF() {
  const [formData, setFormData] = useState({
    para: '',
    direccion:'',
    de: userData.name,
    total: '',
    despacharPor: '',
    kilos: '',
    bultoN: '',
  });

  const etiquetaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGeneratePDF = () => {
    html2pdf().from(etiquetaRef.current).set({
      margin: 0,
      filename: `etiquetas-${formData.para || 'sin-nombre'}.pdf`,
      jsPDF: { unit: 'cm', format: 'a4' },
    }).save();
  };

  const totalBultos = parseInt(formData.total, 10);
  const isValidTotal = !isNaN(totalBultos) && totalBultos > 0;

  return (
    <div className="space-y-4">
      <form className="flex flex-wrap md:grid md:grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.toUpperCase()}
            value={formData[key]}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        ))}
      </form>
      <button
        onClick={handleGeneratePDF}
        className="bg-primary text-white px-2 py-2 rounded"
        disabled={!isValidTotal}
      >
        Generar PDF
      </button>
      <div ref={etiquetaRef} className='flex flex-wrap'>
        {isValidTotal &&
          Array.from({ length: totalBultos }).map((_, i) => (
            <Etiquetas key={i} data={{ ...formData, bultoN: i + 1 }} />
          ))}
      </div>
    </div>
  );
}
