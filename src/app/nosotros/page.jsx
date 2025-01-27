import BotonWsp from '@/components/BotonWSP/BotonWsp'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import NosotrosPage from '@/components/SobreMi/NosotrosPage'
import VolverArriba from '@/components/VolverArriba/VolverArriba'
import React from 'react'

const NosPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="">
        <NavBar />
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
  )
}

export default NosPage