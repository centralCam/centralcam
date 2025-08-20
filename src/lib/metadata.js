//src/lib/metadata.js
export const defaultMetadata = {
  title: 'CENTRAL CAM | Venta de Repuestos para Camiones y Vehículos Pesados',
  description: "En CENTRAL CAM, vendemos repuestos para camiones y transporte pesado en Mar del Plata, Argentina. Envíos rápidos a todo el país. ¡Calidad y confianza garantizadas!",
  keywords: 'repuestos para camiones, vehículos pesados, mecánica, piezas de camiones, accesorios, envíos rápidos, ecommerce, Central CAM',
  charSet: 'UTF-8',
  icons: '/favicon.ico',
  manifest: '/manifest.json',
  robots: '/robots.txt',
  authors: [{ name: 'Gonzalo Torres Grau', url: 'https://gonzalotorresgrau.com' }],
  publisher: 'CENTRAL CAM | Venta de Repuestos para Camiones y Vehículos Pesados',
  openGraph: {
    title: 'CENTRAL CAM | Venta de Repuestos para Camiones y Vehículos Pesados',
    description: "En CENTRAL CAM, vendemos repuestos para camiones y transporte pesado en Mar del Plata, Argentina. Envíos rápidos a todo el país. ¡Calidad y confianza garantizadas!",
    type: 'website',
    url: 'https://centralcamshop.com/',
    // Normalizamos a un arreglo de imágenes para compatibilidad con Next/OpenGraph
    images: [{ url: 'https://centralcamshop.com/logos/LogoCentral2.webp', alt: 'Logo Central Cam' }],
  }, 
    twitter: {
      card: 'summary_large_image',
      site: '@centralcam',
      title: 'CENTRAL CAM | Venta de Repuestos para Camiones y Vehículos Pesados',
      description: "En CENTRAL CAM, vendemos repuestos para camiones y transporte pesado en Mar del Plata, Argentina. Envíos rápidos a todo el país. ¡Calidad y confianza garantizadas!",
      images: [{ url: 'https://centralcamshop.com/logos/LogoCentral2.webp' }],
    },
    alternates: {
      canonical: 'https://centralcamshop.com/',
    }
  };
  