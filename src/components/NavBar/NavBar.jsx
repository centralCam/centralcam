'use client'
import React, { useContext, useEffect, useState } from 'react';
import { removeFromLocalStorage, getInLocalStorage } from '../../Hooks/localStorage';
import Links from '@/app/constants/Links';
import Link from 'next/link';
import Logo from '../../../public/logos/LogoCentral.webp';
import UserMenu from './UserMenu';
import { IoCartOutline } from 'react-icons/io5';
import { CartContext } from '../Context/ShoopingCartContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { logOut } from '@/lib/firebase';

const NavBar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart ? cart.reduce((acc, curr) => acc + curr.quantity, 0) : 0;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState('/');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getInLocalStorage('USER');
    setUser(userData);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href) => {
    setCurrentLink(href);
  };

  const handleLogOut = () => {
    try{
      Swal.fire({
        icon:'info',
        title:'¿Esta seguro quiere salir?',
        showCancelButton:true,
        showConfirmButton:true
      }).then((result) =>{
        if(result.isConfirmed){
          const salir = logOut();
          removeFromLocalStorage('USER');
          setUser(null);
          Swal.fire(salir.message);
        }})
    }catch(error){
      toast.error(error)
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 md:px-2 py-1">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse my-4 pb-2">
          <img src={Logo.src} width={100} height={100} alt="central cam Logo" title="Central cam Logo" loading='lazy'/>
        </Link>

        <div className="flex items-center gap-1 justify-between">
          <div className="block md:hidden">
            <UserMenu user={user} toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen} handleLogOut={handleLogOut} />
          </div>
          <div className="relative block md:hidden">
            <div className={` absolute px-2 m-1 text-white rounded-full right-[-10px] top-[-15px] ${quantity > 0 ? 'bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active block' : 'bg-transparent hidden'}`}>{quantity}</div>
            <IoCartOutline size={30} />
          </div>
          <button
            aria-label="menu"
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
      </div>

        <article className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border items-center border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {Links?.map((link, key) => (
              <li key={key}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 ${currentLink === link.href ? 'text-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}
                  aria-current="page"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name.toLocaleUpperCase()}
                </Link>
              </li>
            ))}
              <Link href='/Shopcart' className='relative'>
                <div className={`hidden md:block absolute text-white px-2 m-1 rounded-full right-[-10px] top-[-15px] ${quantity > 0 ? 'bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active block' : 'bg-transparent hidden'}`}>{quantity}</div>
                <IoCartOutline size={30} className='mx-2 hidden md:block' />
              </Link>
                <div className="hidden md:block">
                  <UserMenu user={user} toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen} handleLogOut={handleLogOut} />
                </div>
          </ul>
        </article>
      </div>
    </nav>
  );
};

export default NavBar;