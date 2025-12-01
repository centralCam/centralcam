# Estadísticas de WhatsApp

## 📊 Descripción
Sistema de seguimiento de clics en los botones de WhatsApp (Administración y Ventas) con visualización de estadísticas en el panel de administración.

## ✨ Características

### 1. Registro Automático de Clics
- Cada vez que un usuario hace clic en el botón de WhatsApp (Administración o Ventas), se registra automáticamente en la base de datos.
- El registro incluye:
  - Tipo de contacto (administracion/ventas)
  - Fecha y hora del clic
  - Fecha simplificada para agrupación

### 2. Panel de Estadísticas
El panel de administración muestra:

#### Tarjetas Resumen
- **Total de clics en Administración**: Cantidad y porcentaje del total
- **Total de clics en Ventas**: Cantidad y porcentaje del total
- **Total General**: Suma de todos los clics

#### Gráfico de Pastel
- Distribución visual de los clics entre Administración y Ventas
- Muestra porcentajes de cada categoría

#### Gráfico de Barras por Día
- Comparación diaria de clics entre ambos departamentos
- Permite ver tendencias y patrones de contacto

#### Gráfico de Líneas
- Tendencia temporal de los clics
- Visualización de la evolución en el tiempo

### 3. Filtros de Período
Selecciona el rango de fechas para analizar:
- Últimos 7 días
- Últimos 30 días (por defecto)
- Últimos 90 días
- Últimos 6 meses
- Último año

## 🚀 Uso

### Para Usuarios del Sitio
Simplemente haz clic en el botón flotante de WhatsApp y selecciona Administración o Ventas. El clic se registrará automáticamente.

### Para Administradores
1. Accede al panel de administración
2. En el menú lateral, selecciona "Estadisticas WhatsApp"
3. Visualiza las estadísticas y cambia el período según necesites
4. Analiza qué departamento recibe más contactos

## 🔧 Implementación Técnica

### Archivos Creados/Modificados

#### API Endpoint
- **`src/app/api/whatsapp-stats/route.js`**
  - POST: Registra un nuevo clic
  - GET: Obtiene estadísticas con parámetro de período

#### Componente de Estadísticas
- **`src/components/Admin/EstadisticasWhatsApp/EstadisticasWhatsApp.jsx`**
  - Muestra todas las visualizaciones
  - Permite filtrar por período
  - Usa Recharts para gráficos

#### Modificaciones
- **`src/components/BotonWSP/BotonWsp.jsx`**
  - Agregada función `registrarClic()`
  - Llama a la API en cada clic

- **`src/components/Admin/Admin.jsx`**
  - Agregada nueva sección "WhatsAppStats"

- **`src/components/Admin/Nav/Nav.jsx`**
  - Agregado ítem de menú "Estadisticas WhatsApp"

### Base de Datos
Colección: `whatsapp_stats`

Estructura de documento:
```javascript
{
  tipo: "administracion" | "ventas",
  timestamp: ISODate("2025-11-30T10:30:00.000Z"),
  fecha: "2025-11-30"
}
```

## 📈 Métricas Disponibles

1. **Clics Totales por Tipo**: Cantidad de veces que se contactó a cada departamento
2. **Distribución Porcentual**: Qué porcentaje de los contactos va a cada área
3. **Tendencia Temporal**: Cómo varían los contactos día a día
4. **Comparativas**: Diferencias entre Administración y Ventas

## 🎨 Colores en Gráficos
- **Azul (#3b82f6)**: Administración
- **Verde (#10b981)**: Ventas
- **Púrpura (#8b5cf6)**: Total

## 💡 Casos de Uso

1. **Análisis de Demanda**: Identificar qué departamento necesita más recursos
2. **Horarios Peak**: Ver en qué días hay más contactos
3. **Efectividad del Botón**: Medir cuánta gente usa el botón de WhatsApp
4. **Distribución de Trabajo**: Balancear la carga entre departamentos

## 🔐 Consideraciones de Privacidad
- Solo se registra el tipo de clic y la fecha
- No se almacena información personal del usuario
- Los datos son anónimos y solo para análisis interno

## 🛠️ Mantenimiento

### Limpiar Datos Antiguos
Si necesitas limpiar datos antiguos de la base de datos:

```javascript
// En MongoDB
db.whatsapp_stats.deleteMany({
  timestamp: { $lt: new Date('2025-01-01') }
})
```

### Verificar Funcionamiento
1. Haz clic en un botón de WhatsApp
2. Verifica en la base de datos que se creó el registro
3. Revisa el panel de estadísticas para confirmar la visualización

## 📊 Dashboard de Ejemplo
El dashboard mostrará información como:
- "Administración: 156 clics (45%)"
- "Ventas: 190 clics (55%)"
- "Total: 346 clics en los últimos 30 días"

---

**Última actualización**: Noviembre 2025
