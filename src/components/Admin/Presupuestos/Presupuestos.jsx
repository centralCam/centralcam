'use client'

import React, { useState } from 'react'
import useProducts from '@/Hooks/useProducts'
import Swal from 'sweetalert2'
import handleShare from '@/Utils/handleShare'
import generarPDF from '@/Utils/generarPDF'

const Presupuestos = () => {
  const { products } = useProducts()

  const [empresa, setEmpresa] = useState({
    nombre: '',
    direccion: '',
    mail: '',
    telefono: '',
    cuil: ''
  })

  const [items, setItems] = useState([])

  const handleAddItem = () => {
    setItems([...items, { cantidad: 1, producto: '', codigo: '', precio: 0 }])
  }

  const handleItemChange = (index, field, value) => {
    const updated = [...items]
    updated[index][field] = field === 'cantidad' || field === 'precio' ? Number(value) : value
    setItems(updated)
  }

 const confirmarYGenerar = () => {
    Swal.fire({
      title: '¿El presupuesto está correcto?',
      text: 'Podrás editarlo si lo necesitas',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, generar PDF',
      cancelButtonText: 'No, editar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const pdf = await generarPDF(empresa, items)
  
        Swal.fire({
          title: 'PDF generado',
          text: 'El PDF ha sido generado',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Sí, compartir',
          cancelButtonText: 'No'
        }).then(async (result) => {
          if (result.isConfirmed) {
            await handleShare(pdf)
          }
  
          // ✅ Reiniciar formulario después de generar (independientemente si comparte o no)
          setEmpresa({
            nombre: '',
            direccion: '',
            mail: '',
            telefono: '',
            cuil: ''
          })
          setItems([])
  
          Swal.fire({
            icon: 'success',
            title: 'Formulario reiniciado',
            timer: 1500,
            showConfirmButton: false
          })
        })
      } else {
        Swal.fire({
          title: '¿Desea reiniciar el formulario?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sí, reiniciar',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.isConfirmed) {
            setEmpresa({
              nombre: '',
              direccion: '',
              mail: '',
              telefono: '',
              cuil: ''
            })
            setItems([])
            Swal.fire({
              icon: 'success',
              title: 'Formulario reiniciado',
              timer: 1500,
              showConfirmButton: false
            })
          }
        })
      }
    })
  }
  
  const calcularTotal = () => {
    return items.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-lg md:text-2xl font-bold mb-2">Generar Presupuesto</h2>
      <h3 className="text-base md:text-xl font-bold mb-4">Datos Empresa</h3>

      {/* Empresa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {Object.keys(empresa).map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={empresa[field]}
            onChange={e => setEmpresa({ ...empresa, [field]: e.target.value })}
            className="border p-2 rounded"
          />
        ))}
      </div>

      {/* Productos */}
      <h3 className="text-xl font-semibold mb-2">Productos</h3>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-5 gap-2 mb-2">
          <label className="text-sm font-semibold">Cantidad</label>
          <label className="text-sm font-semibold">Producto</label>   
          <label className="text-sm font-semibold">Codigo</label>  
          <label className="text-sm font-semibold">Precio</label>
          <label className="text-sm font-semibold">Total</label>
          <input type="number" value={item.cantidad} onChange={e => handleItemChange(index, 'cantidad', e.target.value)} className="border p-1 rounded" />
          <input type="text" value={item.producto} onChange={e => handleItemChange(index, 'producto', e.target.value)} className="border p-1 rounded" />
          <input type="text" value={item.codigo} onChange={e => handleItemChange(index, 'codigo', e.target.value)} className="border p-1 rounded" />
          <input type="number" value={item.precio} onChange={e => handleItemChange(index, 'precio', e.target.value)} className="border p-1 rounded" />
          <div className="p-2 text-right">
            {(item.cantidad * item.precio).toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
              minimumFractionDigits: 2
            })}
          </div>
        </div>
      ))}

      <button onClick={handleAddItem} className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Agregar Producto</button>

      {/* Total y acciones */}
      <div className="mt-6 text-right">
        <p className="text-lg font-bold">
          Total: {calcularTotal().toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2
          })}
        </p>
        <button onClick={confirmarYGenerar} className="mt-4 bg-green-600 text-white px-6 py-2 rounded">Generar PDF</button>
      </div>
    </div>
  )
}

export default Presupuestos
