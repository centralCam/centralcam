import React from 'react';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { ShoppingCartProvider } from '@/components/Context/ShoopingCartContext';

export const metadata = {
  title: 'Central CAM',
  description: "Venta de Repuestos de camiones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/bg/bg-banner.webp" as="image" />
        <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking-inline.css" crossOrigin="anonymous"/>
        <script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossOrigin="anonymous" async></script>
        <meta name="description" content="Venta de Repuestos de camiones" />
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
