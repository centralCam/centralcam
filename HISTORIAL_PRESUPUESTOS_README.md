# Sistema de Historial de Presupuestos

## 📋 Descripción

Se ha implementado un sistema completo de historial de presupuestos que permite guardar y descargar todos los presupuestos y recibos generados para cada empresa.

## ✨ Funcionalidades Implementadas

### 1. Modelo de Datos

**Archivo modificado:** `src/models/empresaSchema.js`

- Se agregó un nuevo schema `presupuestoSchema` que incluye:
  - `tipo`: "presupuesto" o "recibo"
  - `fecha`: Fecha del documento
  - `items`: Array de productos (cantidad, producto, código, precio)
  - `pagos`: Array de formas de pago (tipo, monto, cheque, banco, etc.)
  - `total`: Monto total del documento
  - `observaciones`: Notas adicionales
  - `pdfUrl`: URL del PDF (opcional para futuras implementaciones)

- Se agregó el campo `historialPresupuestos` al schema de Empresa, que es un array de presupuestos

### 2. API Endpoints

**Archivo creado:** `src/app/api/empresa/[id]/presupuesto/route.js`

- **POST** `/api/empresa/[id]/presupuesto`: Agrega un nuevo presupuesto al historial de una empresa
- **GET** `/api/empresa/[id]/presupuesto`: Obtiene el historial completo de presupuestos de una empresa

### 3. Componente de Historial

**Archivo creado:** `src/components/Admin/Presupuestos/HistorialPresupuestos.jsx`

Componente que muestra el historial de presupuestos con las siguientes características:

- **Botón de toggle**: Muestra/oculta el historial con contador de presupuestos
- **Tabla responsive**: Muestra fecha, tipo, total, cantidad de items
- **Botón de descarga**: Regenera y descarga el PDF de cualquier presupuesto anterior
- **Indicadores visuales**: Badges de colores para diferenciar presupuestos de recibos
- **Formato de moneda**: Muestra los montos en formato argentino (ARS)
- **Estados de carga**: Loading spinner mientras carga los datos

### 4. Integración en Presupuestos

**Archivo modificado:** `src/components/Admin/Presupuestos/Presupuestos.jsx`

Cambios realizados:

- Se agregó el campo `_id` al estado de empresa para trackear la empresa seleccionada
- Al generar un PDF, automáticamente se guarda en el historial de la empresa
- Se muestra el componente `HistorialPresupuestos` cuando hay una empresa seleccionada
- Se actualiza el ID de empresa cuando se crea una nueva o se selecciona una existente

### 5. Integración en Vista de Empresas

**Archivo modificado:** `src/components/Admin/Empresas/Empresas.jsx`

Cambios realizados:

- Se agregó el componente `HistorialPresupuestos` en cada tarjeta de empresa
- Se mejoró el layout para mostrar la información de forma más organizada
- Ahora se puede ver y descargar el historial directamente desde la lista de empresas

## 🎯 Flujo de Uso

### Generar un Presupuesto

1. El usuario crea un presupuesto/recibo en el formulario
2. Al confirmar y generar el PDF:
   - Si la empresa no existe, se crea en la BD
   - El presupuesto se genera como PDF
   - Automáticamente se guarda en el historial de la empresa
3. El usuario puede compartir el PDF generado

### Ver el Historial

**Opción 1: Desde Presupuestos**
1. Seleccionar una empresa existente
2. Aparece el botón "Ver Historial de Presupuestos"
3. Click para ver todos los presupuestos de esa empresa

**Opción 2: Desde Empresas**
1. En la vista de administración de empresas
2. Cada empresa tiene su botón de historial
3. Click para ver todos los presupuestos

### Descargar un Presupuesto Anterior

1. Click en el botón "📥 Descargar" de cualquier presupuesto
2. El sistema regenera el PDF con los datos guardados
3. Se descarga automáticamente

## 🔧 Estructura de Datos

### Presupuesto Guardado

```javascript
{
  tipo: 'presupuesto', // o 'recibo'
  fecha: Date,
  items: [
    {
      cantidad: 2,
      producto: 'Producto X',
      codigo: 'ABC123',
      precio: 1500,
      usd: false
    }
  ],
  pagos: [
    {
      tipo: 'efectivo',
      monto: 3000,
      CH_n: '',
      Bco: '',
      cuit: '',
      date: Date
    }
  ],
  total: 3000,
  observaciones: 'Notas adicionales'
}
```

## 📱 Características Responsive

- La tabla de historial es completamente responsive
- En dispositivos móviles se adapta para mejor visualización
- Los botones y badges se ajustan al tamaño de pantalla

## 🎨 Estilos y UX

- **Badges de color**: 
  - Presupuestos: Fondo azul
  - Recibos: Fondo verde
- **Contador visible**: Muestra la cantidad de presupuestos en el botón
- **Loading states**: Indicadores de carga mientras se obtienen datos
- **Mensajes amigables**: "No hay presupuestos registrados" cuando está vacío

## 🚀 Próximas Mejoras (Opcionales)

1. **Almacenamiento de PDFs**: Guardar los PDFs generados en un servicio de almacenamiento
2. **Filtros**: Agregar filtros por fecha, tipo, monto
3. **Exportación masiva**: Descargar múltiples presupuestos en un ZIP
4. **Búsqueda**: Buscar presupuestos por contenido o código de producto
5. **Edición**: Permitir editar presupuestos guardados
6. **Estadísticas**: Gráficos de ventas por empresa, periodo, etc.

## 📝 Notas Técnicas

- Los presupuestos se guardan automáticamente al generar el PDF
- No es necesario guardado manual
- El historial persiste en MongoDB
- La regeneración de PDFs usa los datos guardados para mantener exactitud
- Compatible con el sistema existente de empresas

## ⚠️ Consideraciones

- Asegurarse de que la empresa tenga un `_id` válido antes de guardar presupuestos
- Los presupuestos se guardan después de generar el PDF, no antes
- Si falla el guardado del historial, el PDF igual se genera (no bloquea el flujo)
