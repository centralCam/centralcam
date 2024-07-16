// store/useStore.js
import {create} from 'zustand';

const useStore = create((set) => ({
  products: [],
  categories: [],
  brands: [],
  vehiculos: [],
  allDestacados: [],
  selectedCategories: [],
  selectedBrands: [],
  selectedVehiculos: [],
  showAllCategories: false,
  showAllBrands: false,
  showAllVehiculos: false,
  selectedProduct: null,
  isModalOpen: false,
  totalPages: 1,
  currentPage: 1,
  isLoading: true,
  hasFetched: false,

  // Actions
  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setBrands: (brands) => set({ brands }),
  setVehiculos: (vehiculos) => set({ vehiculos }),
  setAllDestacados: (allDestacados) => set({ allDestacados }),
  setSelectedCategories: (selectedCategories) => set({ selectedCategories }),
  setSelectedBrands: (selectedBrands) => set({ selectedBrands }),
  setSelectedVehiculos: (selectedVehiculos) => set({ selectedVehiculos }),
  setShowAllCategories: (showAllCategories) => set({ showAllCategories }),
  setShowAllBrands: (showAllBrands) => set({ showAllBrands }),
  setShowAllVehiculos: (showAllVehiculos) => set({ showAllVehiculos }),
  setSelectedProduct: (selectedProduct) => set({ selectedProduct }),
  setIsModalOpen: (isModalOpen) => set({ isModalOpen }),
  setTotalPages: (totalPages) => set({ totalPages }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setHasFetched: (hasFetched) => set({ hasFetched }),
}));

export default useStore;
