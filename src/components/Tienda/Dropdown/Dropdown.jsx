
'use client'
import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({
  handleCheckboxChange,
  handleClearFilters,
  categories,
  handleShowAllCategories,
  showAllCategories,
  selectedCategories,
  setSelectedCategories,
  brands,
  handleShowAllBrands,
  showAllBrands,
  selectedBrands,
  setSelectedBrands,
  vehiculos,
  handleShowAllVehiculos,
  showAllVehiculos,
  selectedVehiculos,
  setSelectedVehiculos,
}) => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isVehiculosOpen, setIsVehiculosOpen] = useState(false);

  // Referencia al nodo principal del dropdown
  const dropdownRef = useRef(null);

  // Función para cerrar todos los dropdowns
  const closeDropdowns = () => {
    setIsMainOpen(false);
    setIsCategoriesOpen(false);
    setIsBrandsOpen(false);
    setIsVehiculosOpen(false);
  };

  // Manejar clics fuera del componente para cerrar los dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Funciones para toggle de cada dropdown
  const toggleMainDropdown = () => {
    setIsMainOpen(!isMainOpen);
  };

  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleBrandsDropdown = () => {
    setIsBrandsOpen(!isBrandsOpen);
  };

  const toggleVehiculosDropdown = () => {
    setIsVehiculosOpen(!isVehiculosOpen);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-30">
      <button
        id="dropdownFiltros"
        data-dropdown-toggle="dropdown"
        onClick={toggleMainDropdown}
        className="text-white bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        aria-label="filtrar"
      >
        FILTROS
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {isMainOpen && (
        <div id="dropdown" className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <button
            onClick={handleClearFilters}
            className="text-white bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active font-medium text-sm px-4 py-2 w-full rounded-t-md"
            aria-label="limpiar filtros"
          >
            LIMPIAR FILTROS
          </button>

          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
            <li>
              <button
                onClick={toggleCategoriesDropdown}
                className="flex place-items-center w-full text-left px-4 py-2 hover:bg-gray-100 self-center"
                aria-label="filtrar por categoria"
              >
                Categorías
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isCategoriesOpen && (
                <div className="flex flex-col p-2">
                  {categories.slice(0, showAllCategories ? categories.length : 5).map(({ category, count }) => (
                    <label key={category}>
                      <input
                        type="checkbox"
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onChange={(e) => handleCheckboxChange(e, 'category', selectedCategories, setSelectedCategories)}
                      />
                      {category} ({count})
                    </label>
                  ))}
                  {categories.length > 5 && (
                    <button
                      onClick={handleShowAllCategories}
                      className="px-4 text-blue-700 hover:text-white hover:bg-blue-400 rounded border cursor-pointer my-2 w-full"
                      aria-label={showAllCategories ? 'Ver menos...' : 'Ver más...'}
                    >
                      {showAllCategories ? 'Ver menos...' : 'Ver más...'}
                    </button>
                  )}
                </div>
              )}
            </li>
            <li>
              <button
                onClick={toggleBrandsDropdown}
                className="flex place-items-center w-full text-left px-4 py-2 hover:bg-gray-100 self-center"
                aria-label="filtrar por marca"
              >
                Marcas
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isBrandsOpen && (
                <div className="flex flex-col p-2">
                  {brands.slice(0, showAllBrands ? brands.length : 5).map(({ brand, count }) => (
                    <label key={brand}>
                      <input
                        type="checkbox"
                        value={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => handleCheckboxChange(e, 'brand', selectedBrands, setSelectedBrands)}
                      />
                      {brand} ({count})
                    </label>
                  ))}
                  {brands.length > 5 && (
                    <button
                      onClick={handleShowAllBrands}
                      className="px-4 text-blue-700 hover:text-white hover:bg-blue-400 rounded border cursor-pointer my-2 w-full"
                      aria-label={showAllBrands ? 'Ver menos...' : 'Ver más...'}
                    >
                      {showAllBrands ? 'Ver menos...' : 'Ver más...'}
                    </button>
                  )}
                </div>
              )}
            </li>
            <li>
              <button
                onClick={toggleVehiculosDropdown}
                className="flex place-items-center w-full text-left px-4 py-2 hover:bg-gray-100 self-center"
                aria-label="filtrar por vehiculo"
              >
                Vehiculos
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isVehiculosOpen && (
                <div className="flex flex-col p-2">
                  {vehiculos.slice(0, showAllVehiculos ? vehiculos.length : 5).map(({ vehiculo, count }) => (
                    <label key={vehiculo}>
                      <input
                        type="checkbox"
                        value={vehiculo}
                        checked={selectedVehiculos.includes(vehiculo)}
                        onChange={(e) => handleCheckboxChange(e, 'vehiculo', selectedVehiculos, setSelectedVehiculos)}
                      />
                      {vehiculo} ({count})
                    </label>
                  ))}
                  {vehiculos.length > 5 && (
                    <button
                      onClick={handleShowAllVehiculos}
                      className="px-4 text-blue-700 hover:text-white hover:bg-blue-400 rounded border cursor-pointer my-2 w-full"
                      aria-label={showAllVehiculos ? 'Ver menos...' : 'Ver más...'}
                    >
                      {showAllVehiculos ? 'Ver menos...' : 'Ver más...'}
                    </button>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
