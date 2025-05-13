import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import userData from '@/app/constants/userData';
import CargarEmpresaModal from '../Presupuestos/CargarEmpresa';
import useEmpresas from '../../../Hooks/useEmpresas'


function Etiquetas({ data }) {
  return (
    <div className="w-[20cm] h-[9.4cm] border border-primary p-2 rounded-md text-xl font-medium gap-2 m-2 ">
      <div className="bg-primary text-white text-2xl font-bold p-2 flex justify-around items-center rounded-md uppercase text-center">
        <span>ENVÍO</span>
        <img src='/logos/LogoCentral2.webp' className="h-12"/>
      </div>
      <div className=" flex flex-col mt-2 justify-center mx-8 text-2xl uppercase">
        <div className='flex justify-between mt-1'><strong>PARA:</strong> {data.para}</div>
        <div className='flex justify-between mt-1'><strong>Direccion:</strong> {data.direccion}</div>
        <div className="flex justify-between mt-1"><strong>DE:</strong> {data.de}</div>
        <div className="flex justify-between mt-1"><strong>BULTOS <small>total</small>:</strong> {data.total}</div>
        <div className="mt-1 flex justify-between"><strong>DESPACHAR POR:</strong>{data.despacharPor}</div>
        <div className="mt-2 flex justify-around gap-1">
          <div><strong>KILOS <small>total</small>: </strong><br />{data.kilos} kg.</div>
          <div><strong>BULTO N°: </strong><br />{data.bultoN}</div>
        </div>
      </div>
    </div>
  );
}

export default function EtiquetaFormPDF() {
    const [usarEmpresa, setUsarEmpresa] = useState(false);
    const [formData, setFormData] = useState({
        para: '',
        direccion:'',
        de: userData.name,
        total: '',
        despacharPor: '',
        kilos: '',
        bultoN: '',
    });
    const { empresas } = useEmpresas()
    const [empresa, setEmpresa] = useState({
      nombre: '',
      direccion: '',
      mail: '',
      telefono: '',
      cuil: '',
      observaciones:'',
      tipo: ''
    })

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
        <div className="flex flex-col">
            <div className="flex gap-2">
                <input type="checkbox" id="usarEmpresa" checked={usarEmpresa} 
                onChange={(e) => {setUsarEmpresa(e.target.checked);
                if (e.target.checked && empresa.nombre && empresa.direccion) {
                    setFormData((prev) => ({
                    ...prev,
                    para: empresa.nombre,
                    direccion: empresa.direccion,
                        }));
                    }
                    }}
                />
                <label htmlFor="usarEmpresa">Cargar empresa</label>
            </div>
            {usarEmpresa
            ?<CargarEmpresaModal empresas={empresas}
                onEmpresaSeleccionada={(empresaSeleccionada) => {
                    setEmpresa({
                        nombre: empresaSeleccionada.nombre,
                        direccion: empresaSeleccionada.direccion,
                        mail: empresaSeleccionada.mail,
                        telefono: empresaSeleccionada.telefono,
                        cuil: empresaSeleccionada.cuil,
                        tipo: empresaSeleccionada.tipo,
                    });
                    if (usarEmpresa) {
                    setFormData((prev) => ({
                        ...prev,
                        para: empresaSeleccionada.nombre,
                        direccion: empresaSeleccionada.direccion,
                    }))}
                }} />
            :null}
        </div>
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
            disabled={usarEmpresa && (key === 'para' || key === 'direccion')}
        />
        ))}
        <div className="flex items-center gap-2">
    </div>
      </form>
      <button onClick={handleGeneratePDF} className="bg-primary text-white px-2 py-2 rounded cursor-pointer" disabled={!isValidTotal} >
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
