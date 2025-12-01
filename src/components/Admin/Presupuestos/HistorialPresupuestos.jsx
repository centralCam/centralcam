'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '../../ui/button'
import Swal from 'sweetalert2'
import generarPDF from '../../../Utils/generarPDF'

const HistorialPresupuestos = ({ empresaId, empresaData }) => {
  const [historial, setHistorial] = useState([])
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen && empresaId) {
      cargarHistorial()
    }
  }, [isOpen, empresaId])

  const cargarHistorial = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/empresa/${empresaId}/presupuesto`)
      const data = await res.json()
      
      if (res.ok) {
        setHistorial(data.historialPresupuestos || [])
      } else {
        Swal.fire('Error', 'No se pudo cargar el historial', 'error')
      }
    } catch (error) {
      console.error('Error al cargar historial:', error)
      Swal.fire('Error', 'Error al cargar el historial', 'error')
    } finally {
      setLoading(false)
    }
  }

  const descargarPresupuesto = async (presupuesto) => {
    try {
      Swal.fire({
        title: 'Generando PDF...',
        text: 'Por favor espere',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })

      // Regenerar el PDF con los datos guardados
      const empresa = {
        nombre: empresaData.nombre,
        direccion: empresaData.direccion,
        localidad: empresaData.localidad,
        mail: empresaData.mail,
        telefono: empresaData.telefono,
        cuil: empresaData.cuil,
        tipo: empresaData.tipo,
        observaciones: presupuesto.observaciones || empresaData.observaciones,
      }

      const fechaFormateada = new Date(presupuesto.fecha).toISOString().split('T')[0]

      await generarPDF(
        empresa,
        presupuesto.items || [],
        presupuesto.tipo,
        fechaFormateada,
        presupuesto.pagos || []
      )

      Swal.fire('¡Listo!', 'PDF descargado exitosamente', 'success')
    } catch (error) {
      console.error('Error al descargar presupuesto:', error)
      Swal.fire('Error', 'No se pudo descargar el presupuesto', 'error')
    }
  }

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const formatearMoneda = (monto) => {
    return monto.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    })
  }

  if (!empresaId) {
    return null
  }

  return (
    <div className="my-4">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 hover:bg-purple-700 text-white"
      >
        {isOpen ? 'Ocultar' : 'Ver'} Historial de Presupuestos ({historial.length})
      </Button>

      {isOpen && (
        <div className="mt-4 border rounded-lg p-1 bg-gray-50">
          <h3 className="text-sm font-semibold mb-4">
            Historial de Presupuestos - {empresaData?.nombre}
          </h3>

          {loading ? (
            <p className="text-center py-4">Cargando...</p>
          ) : historial.length === 0 ? (
            <p className="text-center py-2 text-gray-500">
              No hay presupuestos registrados para esta empresa
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-1 text-left">Fecha</th>
                    <th className="p-1 text-left">Tipo</th>
                    <th className="p-1 text-right">Total</th>
                    <th className="p-1 text-center">Items</th>
                    <th className="p-1 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {historial.map((presupuesto, index) => (
                    <tr key={presupuesto._id || index} className="border-b hover:bg-gray-100">
                      <td className="p-1">{formatearFecha(presupuesto.fecha)}</td>
                      <td className="p-1 capitalize">
                        <span className={`px-1 py-1 rounded text-xs ${
                          presupuesto.tipo === 'presupuesto' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {presupuesto.tipo}
                        </span>
                      </td>
                      <td className="p-1 text-right font-semibold">
                        {formatearMoneda(presupuesto.total)}
                      </td>
                      <td className="p-1 text-center">
                        {presupuesto.items?.length || presupuesto.pagos?.length || 0}
                      </td>
                      <td className="p-1 text-center">
                        <Button
                          onClick={() => descargarPresupuesto(presupuesto)}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1"
                        >
                          📥 Descargar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default HistorialPresupuestos
