import BotonWsp from '../../components/BotonWSP/BotonWsp'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import NavBar from '../../components/NavBar/NavBar'
import NosotrosPage from '../../components/SobreMi/NosotrosPage'
import VolverArriba from '../../components/VolverArriba/VolverArriba'
import React, { Suspense } from 'react'

const NosPage = () => {
  return (
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
  )
}

export default NosPage