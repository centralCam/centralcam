import BotonWsp from '../../components/BotonWSP/BotonWsp'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import NavBar from '../../components/NavBar/NavBar'
import NosotrosPage from '../../components/SobreMi/NosotrosPage'
import VolverArriba from '../../components/VolverArriba/VolverArriba'
import React, { Suspense } from 'react'
import { defaultMetadata } from '../../lib/metadata'

export const metadata = {
  title: 'Sobre Nosotros | CENTRAL CAM - Expertos en Repuestos para Camiones',
  description: 'Conoce CENTRAL CAM, tu tienda de confianza en Mar del Plata para repuestos y accesorios de camiones y vehículos pesados. Más de 10 años de experiencia en el rubro.',
  keywords: 'sobre central cam, quienes somos, repuestos camiones mar del plata, historia central cam, experiencia repuestos',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Sobre Nosotros | CENTRAL CAM',
    description: 'Conoce CENTRAL CAM, tu tienda de confianza en Mar del Plata para repuestos de camiones.',
    url: 'https://centralcamshop.com/nosotros',
  },
  alternates: {
    canonical: 'https://centralcamshop.com/nosotros',
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "AutoPartsStore",
    "name": "CENTRAL CAM",
    "description": "Tienda especializada en repuestos para camiones y vehículos pesados en Mar del Plata, Argentina",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av Champagnat 1167",
      "addressLocality": "Mar del Plata",
      "addressRegion": "Buenos Aires",
      "postalCode": "B7604",
      "addressCountry": "AR"
    }
  }
};

const NosPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="flex flex-col h-screen">
        <nav className="">
          <Suspense fallback={<Loading/>}>
              <NavBar />
          </Suspense>
        </nav>
        <main className="flex-1 flex items-center justify-center bg-white">
          <NosotrosPage />
        </main>
        <footer className="bg-gray-200">
          <Footer />
          <VolverArriba />
          <BotonWsp />
        </footer>
      </div>
    </>
  )
}

export default NosPage