'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useState, useEffect, Suspense } from "react";
import { IoCartOutline } from 'react-icons/io5';
import { CartContext } from '../Context/ShoopingCartContext';
import Link from "next/link";
import Loading from "../Loading/Loading";

const SearchBase = ({ inputClassName, placeholder }) => {
  const router = useRouter();
  const path = usePathname();
  
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get("search") || "");
  const [isScrolled, setIsScrolled] = useState(false); // State to control if scrolling has occurred

  const [cart, setCart] = useContext(CartContext);
  const quantity = cart ? cart.reduce((acc, curr) => acc + curr.quantity, 0) : 0;

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0); // Set scroll state based on offset
    };

    // Add scroll listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up scroll listener when component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchInput) {
      params.set("search", searchInput);
      params.set("page", 1);
    } else {
      params.delete("search");
    }
    const newPath = path === '/Admin' ? '/Admin' : '/';
    router.push(`${newPath}?${params.toString()}#productos${newPath === '/Admin' ? 'Admin' : ''}`);
    
  };

  return (
    <Suspense fallback={<Loading />}>
      <div id="searchSticky" className={`border-none flex items-center justify-between max-w-xl mx-auto sticky top-0 z-40 ${isScrolled ? 'bg-white w-full rounded-lg shadow-md' : ''}`}>
        <form id='formSearchBar' onSubmit={handleSearch} className={`relative flex-1 ${inputClassName} rounded-lg border-none`}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only border-none">Buscar</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm border rounded-lg" placeholder={placeholder} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <button type="submit" className={`text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active`} aria-label="buscar">BUSCAR</button>
          </div>
        </form>
        {path === '/' && (
          <div className={`relative ${isScrolled ? 'block' : 'hidden'}`}>
            <Link href='/Shopcart'>
              <div className={`absolute text-white px-2 m-1 rounded-full right-[10px] top-[-15px] ${quantity > 0 ? 'bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active block' : 'bg-transparent hidden'}`}>{quantity}</div>
              <IoCartOutline size={30} className='mx-5 ' />
            </Link>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default SearchBase;
