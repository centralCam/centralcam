'use client'
import React, { useState } from 'react';
import { logOut } from '../../../lib/firebase';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DownloadCSVButton from '../../../components/Admin/DownloadCSVButton/DownloadCSVButton';
import { removeFromLocalStorage } from '../../../Hooks/localStorage';



export default function Nav( {handleSelectSection} ) {

    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    try{
       Swal.fire({
        icon:'info',
        title:'¿Esta seguro quiere salir?',
        showCancelButton:true,
        showConfirmButton:true
      }).then(async (result) =>{
        if(result.isConfirmed){
          const salir = logOut();
          removeFromLocalStorage('USER');
          // setUser(null);
          await Swal.fire(salir.message);
          router.push('/')
        }})
    }catch(error){
      toast.error(error)
    }
  };



  return (
    <div className="border-gray-200 bg-[url('/bg/bg-banner.webp')]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between flex-row-reverse mx-auto p-4">
  <a href="#" className="flex items-center space-x-3" title='volver al home' aria-label='Volver al inicio del panel administrativo'> 
          <img src="/logos/LogoCentral2.webp" className="h-14" alt="Logo central cam" loading='lazy' title="Logo central cam" aria-label='Logo central cam'/>
        </a>
        <button
        aria-label="menu navbar"
          onClick={toggleMenu}
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      {/* Drawer */}

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-primary w-64`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-200 uppercase "
        >
          Menu
        </h5>
        <button
        
        aria-label="menu navbar"
          type="button"
          onClick={toggleMenu}
          aria-controls="drawer-navigation"
          className="bg-gray-300 text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center "
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* Productos  */}
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover group" onClick={() => {handleSelectSection("Productos");toggleMenu()}} title='Productos' aria-label='Ir a Productos en panel administrativo'>
                <svg
                  className="w-5 h-5 text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                  />
                </svg>
                <span className="ml-3 text-gray-200 ">Productos</span>
              </a>
            </li>
            {/* Productos Destacados  */}
            <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover group" onClick={() => {
                  handleSelectSection("Destacados");
                  toggleMenu();
                }}
                title='Productos destacados'
          aria-label='Ir a Productos destacados en panel administrativo'
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.736 1.043a1.5 1.5 0 0 0-1.472 1.272L6.07 5.5H2.25a1.5 1.5 0 0 0-1.035 2.598l3.072 3.07-1.286 5.144a1.5 1.5 0 0 0 2.318 1.616L10 15.734l4.681 2.194a1.5 1.5 0 0 0 2.318-1.616l-1.286-5.144 3.072-3.07A1.5 1.5 0 0 0 17.75 5.5h-3.82l-1.195-3.185a1.5 1.5 0 0 0-1.472-1.272A9.471 9.471 0 0 0 10 1a9.471 9.471 0 0 0-1.264.043ZM7.5 9.5h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2Z" />
                </svg>
                <span className="ml-3 text-gray-200 ">
                  Productos destacados
                </span>
              </a>
            </li>

            {/* Comprobantes */}
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover group" onClick={() => { handleSelectSection("Comprobantes"); toggleMenu()}} title='Presupuestos ' aria-label='Ir a Comprobantes'>
                <span className="ml-3 text-gray-200">Comprobantes</span>
              </a>
            </li>

            {/* Empresas */}
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover group" onClick={() => { handleSelectSection("Empresas"); toggleMenu()}} title='Presupuestos ' aria-label='Ir a Empresas'>
                <span className="ml-3 text-gray-200">Empresas</span>
              </a>
            </li>

            {/* Etiquetas */}
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover group" onClick={() => { handleSelectSection("Etiquetas"); toggleMenu()}} title='Etiquetas ' aria-label='Ir a Etiquetas'>
                <span className="ml-3 text-gray-200">Etiquetas</span>
              </a>
            </li>
            {/* Estadisticas */}
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover group" onClick={() => { handleSelectSection("Estadisticas"); toggleMenu()}} title='Estadisticas GSC' aria-label='Ir a Estadisticas'>
                <span className="ml-3 text-gray-200">Estadisticas GSC</span>
              </a>
            </li>
            {/* Estadisticas WhatsApp */}
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover group" onClick={() => { handleSelectSection("WhatsAppStats"); toggleMenu()}} title='Estadisticas WhatsApp' aria-label='Ir a Estadisticas WhatsApp'>
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="ml-3 text-gray-200">Estadisticas WhatsApp</span>
              </a>
            </li>
            {/* Descargar CSV */}
            <li>
              <DownloadCSVButton toggleMenu={toggleMenu} />
            </li>

            {/* Regresar a la WEB */}
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover cursor-pointer group"
                href={"/"}
                onClick={toggleMenu}
                title='Regresar a la Web'
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                <span className="ml-3 text-gray-200 ">Regresar a la Web</span>
              </Link>
            </li>
            {/* Logout */}
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-primary-hover cursor-pointer group" onClick={handleLogOut}>
                <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
                </svg>
                <span className="ml-3 text-gray-200 ">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
