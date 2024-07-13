import React from "react";
import Link from "next/link";
import Links from "@/app/constants/Links";
import LogoBlanco from '../../../public/logos/LogoCentral.webp'
import Redes from "@/app/constants/Redes";

export default function Footer() {

  let tamañoRedes = {alto:45, ancho:45}

  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-secondary-background">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link href="/" className="flex flex-col justify-center items-center text-2xl font-semibold  text-white">
          <img src={LogoBlanco.src} height={150} width={150} alt="CentralCam Logo" loading='lazy'/>
          {/* <span className="hidden md:block">STARCAM</span> */}
        </Link>
        
        <p className="my-6 text-gray-300"><strong>CENTRAL CAM </strong>La más amplia variedad de repuestos para camiones: calidad, durabilidad y confiabilidad en cada pieza.</p>
        <ul className="flex flex-wrap justify-center items-center mb-6  text-white">
          {Links?.map((link) => {
              <li><Link href={link.href} className="mr-4 hover:underline md:mr-6 ">{link.name}</Link></li>
          })}
        </ul>
        <Redes height={tamañoRedes.alto} width={tamañoRedes.ancho} />
        <span className="text-sm sm:text-center text-gray-300">© 2024{" "}<Link href="https://programundo.dev" className="hover:underline">Programundo</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
