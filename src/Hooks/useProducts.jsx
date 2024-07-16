// hooks/useProducts.js
'use client';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import useStore from '../store/useStore';

const useProducts = () => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    products, setProducts,
    categories, setCategories,
    brands, setBrands,
    vehiculos, setVehiculos,
    allDestacados, setAllDestacados,
    selectedCategories, setSelectedCategories,
    selectedBrands, setSelectedBrands,
    selectedVehiculos, setSelectedVehiculos,
    showAllCategories, setShowAllCategories,
    showAllBrands, setShowAllBrands,
    showAllVehiculos, setShowAllVehiculos,
    selectedProduct, setSelectedProduct,
    isModalOpen, setIsModalOpen,
    totalPages, setTotalPages,
    currentPage, setCurrentPage,
    isLoading, setIsLoading,
    hasFetched, setHasFetched,
  } = useStore();

  const fetchProducts = async () => {
    const params = new URLSearchParams(searchParams.toString());
    
    const res = await fetch(`/api/products?${params}`);
    if (!res.ok) {
      console.error("Failed to fetch products:", res.statusText);
      return;
    }
    const data = await res.json();
    setProducts(data.products || []);
    setTotalPages(data.totalPage || 1);
    setCategories(data.totalCategories || []);
    setBrands(data.totalBrands || []);
    setVehiculos(data.totalVehiculos || []);
    setAllDestacados(data.allproductosDestacados || []);
    setIsLoading(false);
    setHasFetched(true);
  };

  useEffect(() => {
    if (!hasFetched) {
      fetchProducts();
    }
  }, [searchParams, hasFetched]);

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    setCurrentPage(Number(page));
  }, [searchParams]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    setSelectedCategories(urlSearchParams.getAll("category"));
    setSelectedBrands(urlSearchParams.getAll("brand"));
    setSelectedVehiculos(urlSearchParams.getAll("vehiculo"));
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", value);
    path === '/Admin'
    ? router.push(`/Admin?${params.toString()}`)
    : router.push(`/?${params.toString()}#productos`);
  };

  const handleCheckboxChange = (e, key, selectedValues, setSelectedValues) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedValues((prevSelected) => {
      const newSelected = isChecked
        ? [...prevSelected, value]
        : prevSelected.filter((item) => item !== value);
      updateSearchParams(key, newSelected);
      return newSelected;
    });
  };

  const handleClearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    params.delete("category");
    params.delete("brand");
    params.delete("vehiculo");
    params.set("page", 1);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedVehiculos([]);
    path === '/Admin'
    ? router.push(`/Admin?${params.toString()}`)
    : router.push(`/?${params.toString()}#productos`);
  };

  const handleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const handleShowAllBrands = () => {
    setShowAllBrands(!showAllBrands);
  };

  const handleShowAllVehiculos = () => {
    setShowAllVehiculos(!showAllVehiculos);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const updateSearchParams = (key, values) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    params.set('page', 1);

     if (values.length > 0) {
       values.forEach((value) => params.append(key, value));
     }
     path === '/Admin'
     ? router.push(`/Admin?${params.toString()}`)
     : router.push(`/?${params.toString()}#productos`);
  };

  return {
    products,
    allDestacados,
    categories,
    brands,
    vehiculos,
    selectedCategories,
    selectedBrands,
    selectedVehiculos,
    showAllCategories,
    showAllBrands,
    showAllVehiculos,
    selectedProduct,
    isModalOpen,
    totalPages,
    currentPage,
    isLoading,
    handlePageChange,
    handleCheckboxChange,
    handleClearFilters,
    handleShowAllCategories,
    handleShowAllBrands,
    handleShowAllVehiculos,
    closeModal,
    handleProductSelect,
    fetchProducts,
  };
};

export default useProducts;
