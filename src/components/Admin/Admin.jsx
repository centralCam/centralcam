'use client'
import React, { useEffect, useState, Suspense } from "react";
import ReactDOM from 'react-dom/client';

import AddProduct from "./AddProduct/AddProduct";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import SearchAdmin from "../Search/SearchAdmin";
import useProducts from "@/Hooks/useProducts";
import Dropdown from "../Tienda/Dropdown/Dropdown";
import { Pagination } from "@mui/material";
import Nav from "./Nav/Nav";
import TablaDestacados from "./TablaDestacados/TablaDestacados";
import DownloadCSVButton from "../DownloadCSVButton/DownloadCSVButton";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";


export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClose, setIsModalClose] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [section, setSection] = useState('Productos')


  const {
    products,
    categories,
    brands,
    vehiculos,
    selectedCategories,
    selectedBrands,
    selectedVehiculos,
    showAllCategories,
    showAllBrands,
    showAllVehiculos,
    totalPages,
    currentPage,
    isLoading,
    handlePageChange,
    handleCheckboxChange,
    handleClearFilters,
    handleShowAllCategories,
    handleShowAllBrands,
    handleShowAllVehiculos,
    setSelectedCategories,
    setSelectedBrands,
    setSelectedVehiculos,
    fetchProducts
  } = useProducts();
  

  const openModal = (type, product = null) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setIsModalClose(false);
    setModalType(type); // Set the modal type

  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalClose(true);
  };

  useEffect(  () => {
    if (isModalClose) {
       fetchProducts()
      // Actualiza los datos de la tabla aquí
      //console.log("Modal closed, update table data");
      // Llama a la función para actualizar los datos de la tabla
    }
  }, [isModalClose]);
  
       // esto es para incorporar el spinner dentro del sweetAlert
       const loadingElement = document.createElement('div');
       const root = ReactDOM.createRoot(loadingElement);
       const container = document.createElement('div');
       root.render(<Loading />);
       container.innerHTML = `<h2><strong>AGUARDE</strong></h2><br/><p> se está eliminando el producto</p>`;
       container.appendChild(loadingElement);
   
   
  // Función para eliminar archivos de Cloudinary dinámicamente
  const handleEliminarArchivos = async (producto) => {
    //console.log(producto, 'proddd');
    
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Una vez eliminado, no podrás recuperar este producto ni sus imágenes asociadas.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      });
  
      if (result.isConfirmed) {
        const fotosAEliminar = [];
  
        Swal.fire({
          title: 'Eliminando producto...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        // Iterar sobre todas las claves de fotos del producto
        Object.keys(producto).forEach((key) => {
          if (key.startsWith('foto_') && producto[key]) {
            const imgPrevAEliminar = producto[key].split('/').pop().split('.')[0];
            const imgAEliminar = `Products/${imgPrevAEliminar}`;
            fotosAEliminar.push(imgAEliminar);
          }
        });
            // Mostrar SweetAlert con loading
        // Realizar las eliminaciones en paralelo
        await Promise.all(
          fotosAEliminar.map(async (imgAEliminar) => {
            const res = await fetch('api/deleteImage', {
              method: 'DELETE',
              body: JSON.stringify({ file: imgAEliminar })
            });
            const data = await res.json();
            return data;
          })
        );
  
        // Eliminar el producto de la base de datos
        const resBDD = await fetch('api/deleteProduct', {
          method: 'DELETE',
          body: JSON.stringify({ id: producto._id })
        });
        const dataBDD = await resBDD.json();
  
        if (dataBDD.success) {
          // Actualizar la lista de productos después de eliminar
          fetchProducts();
          Swal.fire({
            icon: 'success',
            title:'El producto ha sido eliminado correctamente.',
            showConfirmButton: false,
            timer: 1500 // Tiempo en milisegundos para cerrar automáticamente
          });
        } else {
          console.error('Error al eliminar el producto en la base de datos:', dataBDD.error);
          Swal.fire(
            'Error',
            'Ha ocurrido un error al intentar eliminar el producto.',
            'error'
          );
        }
      }
    } catch (error) {
      console.error('Error al eliminar las imágenes o producto:', error);
      Swal.fire(
        'Error',
        'Ha ocurrido un error al intentar eliminar el producto o sus imágenes.',
        'error'
      );
    }
  };
  

const handleSelectSection = (section) => {
  setSection(section);
};




  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <div className="flex flex-col min-h-screen">
        <Nav handleSelectSection={handleSelectSection} />
        {/* Tabla de productos   */}
        {section==='Productos'&&(<div>
          <section className="bg-[#F1F4F7] p-3 sm:p-5 ">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
              <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-1/2">
                    <SearchAdmin />
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                      {/* Filter */}
                      <Dropdown
                          handleClearFilters={handleClearFilters} 
                          handleCheckboxChange={handleCheckboxChange}
                          categories={categories} 
                          showAllCategories={showAllCategories}
                          selectedCategories={selectedCategories}
                          setSelectedCategories={setSelectedCategories}
                          handleShowAllCategories={handleShowAllCategories}
                          brands={brands}
                          showAllBrands={showAllBrands}
                          selectedBrands={selectedBrands}
                          setSelectedBrands={setSelectedBrands}
                          handleShowAllBrands={handleShowAllBrands}
                          isLoading={isLoading}
                          vehiculos={vehiculos}
                          handleShowAllVehiculos={handleShowAllVehiculos}
                          showAllVehiculos={showAllVehiculos}
                          selectedVehiculos={selectedVehiculos}
                          setSelectedVehiculos={setSelectedVehiculos}
                      />
                    </div>
                    <button type="button" aria-label="agregar producto" className="flex items-center text-white border bg-boton-primary hover:bg-boton-primary-hover active:bg-boton-primary-active font-medium rounded-lg text-sm px-5 py-2 text-center me-2" onClick={() => openModal('add')}>
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                        </svg>
                        Agregar producto
                    </button>
                    {isModalOpen && modalType === 'add' && (
                      <AddProduct 
                        toggleModal={closeModal}
                        isOpenModal={isModalOpen}
                        marca={brands}
                        categoria={categories}
                        vehiculo={vehiculos}
                      />
                    )}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500" id="productosAdmin">
                    <thead className="text-xs text-gray-900 uppercase bg-gray-400">
                      <tr>
                        <th scope="col" className="px-4 py-3 ">
                          Nombre de Producto{" "}
                        </th>
                        <th scope="col" className="px-4 py-3">
                          {" "}
                          Categoria{" "}
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          {" "}
                          Marca{" "}
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          {" "}
                          Descripción{" "}
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          {" "}
                          Acción{" "}
                        </th>
                      </tr>
                    </thead>
                    {products.length?(
                      <tbody>
                      {products.map((product, index) => (
                        <tr
                          key={index}
                          className={`border-b ${
                            index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                          }`}
                        >
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {product.nombre}
                          </th>
                          <td className="px-4 py-3">{product.categoria}</td>
                          <td className="px-4 py-3">{product.marca}</td>
                          <td title={product.descripcion} className="px-4 py-3 text-center text-ellipsis">
                            {product.descripcion.length > 50 ? `${product.descripcion.slice(0, 50)}...` : product.descripcion}
                          </td>

                          <td className="px-4 py-3 flex items-center justify-start">
                            <div className="flex justify-center m-5">
                              <button
                                aria-label="editar producto"
                                id="updateProductButton"
                                data-modal-target="updateProductModal"
                                data-modal-toggle="updateProductModal"
                                className="px-3 py-2 text-xs focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg me-2 mb-2"
                                type="button"
                                onClick={() => openModal('update', product)}
                              >
                                Editar producto
                              </button>
                            </div>
                            <button
                              aria-label="Eliminar Producto"
                              onClick={()=>handleEliminarArchivos(product)}
                              type="button"
                              className="px-3 py-2 text-xs focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg me-2 mb-2"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>)
                    : (
                      <tbody>
                        <tr className="text-center">
                          <td colSpan="5" className="py-10">
                            <span className="text-gray-500  font-semibold ">No se encontraron productos que coincidan con tu búsqueda.</span>
                          </td>
                        </tr>
                      </tbody>
                    )
                    
                    }
                  </table>
                </div>

                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  siblingCount={1}
                  boundaryCount={1}
                  variant="outlined"
                  shape="rounded"
                  className="flex justify-center my-6 bg-white"
                />
              </div>
            </div>
          </section>
          {isModalOpen && modalType === 'update' && selectedProduct && (
            <UpdateProduct
              toggleModal={closeModal}
              isOpenModal={isModalOpen}
              product={selectedProduct}
              marca={brands}
              categoria={categories}
              vehiculo={vehiculos}
            />
          )}
        </div>)}

        <div className="flex-1 bg-[#F1F4F7] p-3 sm:p-5">
          {/* Productos Destacados */}
          {section === 'Destacados' && (
            <div className="mx-auto max-w-screen-xl  lg:px-12">
              <TablaDestacados />
            </div>
          )}

          {/* Descargar CSV */}
          {section === 'DescargarCSV' && (
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
              <DownloadCSVButton />
            </div>
          )}
          </div>
      </div>
    </Suspense>
  );
}
