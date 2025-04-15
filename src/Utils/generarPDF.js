import userData from "@/app/constants/userData"
import logoEmpresa from '../../public/logos/imgPDF.png'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import getImageBase64 from "./getImageBase64"

const generarPDF = async (empresa, items, tipoDocumento, fecha, pagos, tipoEmpresa) => {
  const imageData = await getImageBase64(logoEmpresa.src)
  const doc = new jsPDF()
  const clienteX = 120

  const fechaPresupuesto = fecha || new Date().toLocaleDateString('es-AR')

  // Logo
  doc.addImage(imageData, 'PNG', 160, 10, 35, 15)

  // Título principal
  doc.setFontSize(16)
  tipoDocumento==='recibo'?doc.text('RECIBO', 15, 15):doc.text('PRESUPUESTO', 15, 15)
  doc.setFontSize(12)
  doc.text(`Fecha: ${fechaPresupuesto}`, 15, 20)

  // Información del presupuesto
  doc.setFontSize(10)

  // Datos de la empresa emisora
  doc.text(`${userData.name}`, 15, 35)
  doc.text(`${userData.email}`, 15, 42)
  doc.text(`+${userData.codigoPais}${userData.contact}`, 15,49)
  doc.text(`${userData.cuil}`, 15, 56)

  // Datos del cliente
  doc.text(`Empresa: ${empresa.nombre || '-'}`, clienteX, 35)
  doc.text(`Dirección: ${empresa.direccion || '-'}`, clienteX, 42)
  doc.text(`Email: ${empresa.mail || '-'}`, clienteX, 49)
  doc.text(`Teléfono: ${empresa.telefono || '-'}`, clienteX, 56)
  doc.text(`CUIL: ${empresa.cuil || '-'}`, clienteX, 63)

  if (tipoEmpresa) {
    doc.text(`Tipo: ${tipoEmpresa}`, clienteX, 70)
  }

  // Tabla de productos
  const tablaStartY = tipoEmpresa ? 95 : 90
  doc.setFontSize(12)
  autoTable(doc, {
    head: [['Cantidad', 'Producto', 'Código', 'Precio', 'Total']],
    body: items.map(item => [
      item.cantidad,
      item.producto,
      item.codigo,
      item.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }),
      (item.cantidad * item.precio).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })
    ]),
    startY: tablaStartY,
    margin: { bottom: 20 }
  })

  const finalY = doc.lastAutoTable?.finalY || tablaStartY + 10
  const total = items.reduce((acc, item) => acc + item.cantidad * item.precio, 0)

  // Total
  doc.setFontSize(11)
  doc.text(`Total: ${total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`, 150, finalY + 20)

  // Observaciones
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  if (pagos?.length) {
    doc.setFont(undefined, 'bold')
    doc.text('Formas de pago:', 15, 250)
    doc.setFont(undefined, 'normal')
    pagos.forEach((fp, i) => {
      doc.text(`- ${fp.tipo}: ${fp.monto?.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`, 20, 255 + i * 5)
    })
  }
  doc.text(`Observaciones: ${empresa.observaciones || 'Ninguna'}`, 15, 275)

  // Footer
  doc.setFillColor(28, 58, 109)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(10)
  doc.text('Este documento no es válido como factura. Contiene precios finales con impuestos incluidos.', 30, 285)
  doc.textWithLink('Para ver más productos puede ingresar en www.centralcamshop.com', 30, 291, { url: 'https://www.centralcamshop.com' })

  // Exportar archivo
  const pdfBlob = doc.output('blob')
  const file = new File([pdfBlob], `presupuesto_${empresa.nombre}.pdf`, {
    type: 'application/pdf'
  })

  doc.save(`presupuesto_${empresa.nombre}.pdf`)
  return file
}

export default generarPDF
