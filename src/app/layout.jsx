import React from 'react';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { ShoppingCartProvider } from '../components/Context/ShoopingCartContext';
import { defaultMetadata } from '../lib/metadata';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet={defaultMetadata.charSet} />
        <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#007BC7" />

        {/* Primary meta tags (for SEO) */}
        <title>{defaultMetadata.title}</title>
        <meta name="description" content={defaultMetadata.description} />
        <meta name="keywords" content={defaultMetadata.keywords} />
        <link rel="canonical" href={defaultMetadata.openGraph.url} />

        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* Open Graph */}
        <meta property="og:title" content={defaultMetadata.openGraph.title} />
        <meta property="og:description" content={defaultMetadata.openGraph.description} />
        <meta property="og:type" content={defaultMetadata.openGraph.type} />
        <meta property="og:url" content={defaultMetadata.openGraph.url} />
        {defaultMetadata.openGraph.images && defaultMetadata.openGraph.images[0] && (
          <meta property="og:image" content={defaultMetadata.openGraph.images[0].url} />
        )}

        {/* Twitter */}
        <meta name="twitter:card" content={defaultMetadata.twitter?.card || 'summary_large_image'} />
        <meta name="twitter:site" content={defaultMetadata.twitter?.site || ''} />
        <meta name="twitter:title" content={defaultMetadata.twitter?.title || defaultMetadata.title} />
        <meta name="twitter:description" content={defaultMetadata.twitter?.description || defaultMetadata.description} />
        {defaultMetadata.twitter?.images && defaultMetadata.twitter.images[0] && (
          <meta name="twitter:image" content={defaultMetadata.twitter.images[0].url} />
        )}

        {/* Fonts and External Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/bg/bg-banner.webp" as="image" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              "name": "CENTRAL CAM",
              "description": defaultMetadata.description,
              "image": "https://centralcamshop.com/logos/centraLogoAzul.webp",
              "url": "https://centralcamshop.com",
              "telephone": "+541162574919",
              "priceRange": "$$",
              "currenciesAccepted": "ARS",
              "paymentAccepted": "Efectivo, Tarjeta de Crédito, Tarjeta de Débito, Transferencia Bancaria",
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av Champagnat 1167",
                "addressLocality": "Mar del Plata",
                "addressRegion": "Buenos Aires",
                "postalCode": "B7604",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-38.0055",
                "longitude": "-57.5426"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Argentina"
              },
              "sameAs": [
                "https://www.instagram.com/centralcamshop/"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://centralcamshop.com/productos?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
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
