import React from 'react';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { ShoppingCartProvider } from '@/components/Context/ShoopingCartContext';

export const metadata = {
  title: 'CENTRAL CAM Venta de Repuestos para Camiones y Vehículos Pesados',
  description: "Central CAM es tu proveedor confiable de repuestos de alta calidad para camiones y vehículos pesados. Ofrecemos una amplia gama de repuestos y accesorios para mantener tus vehículos en óptimas condiciones, con envío rápido, atención personalizada y presupuestos gratuitos.",
  keywords: 'repuestos para camiones, vehículos pesados, mecánica, piezas de camiones, accesorios, envíos rápidos, ecommerce, Central CAM',
  icons: '/favicon.ico',
  robots: '/robots.txt',
  authors: [{ name: 'Programundo', url: 'https://programundo.dev' }],
  publisher: 'Vercel',
  openGraph: {
    title: 'CENTRAL CAM | Venta de Repuestos para Camiones y Vehículos Pesados',
    description: "Encuentra en Central CAM una amplia gama de repuestos y accesorios para camiones y vehículos pesados. Calidad garantizada y envíos a todo el país.",
    type: 'website',
    url: 'https://centralcamshop.com/',
    image: 'https://centralcamshop.com/logos/LogoCentral.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preload" href="/bg/bg-banner.webp" as="image" />
        <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking-inline.css" crossOrigin="anonymous"/>
        <script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossOrigin="anonymous" async></script>
        <link rel="canonical" href="https://centralcamshop.com/" />
        <link rel="image_src" href="https://centralcamshop.com/logos/LogoCentral.webp"/>
      </head>
      <body>
        <ShoppingCartProvider>
          {children}
          <Toaster />
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
