import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/mongodb';
import Producto from '../../../models/product';

export async function GET(request) {
  await connectDB();
  const productsData = await Producto.find().lean();
  
  const { searchParams } = new URL(request.url);

  let filteredProducts = productsData; // Productos que vienen desde MongoDB

  const allproductosDestacados = productsData.filter(prod=> prod.destacados === true )
  
  const search = searchParams.get('search') || '';
  const categories = searchParams.getAll('category');
  const brands = searchParams.getAll('brand');
  const vehiculos = searchParams.getAll('vehiculo');

  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '9');

  // const minPrice = parseFloat(searchParams.get('minPrice') || '0'); // Valor por defecto de 0
  // const maxPrice = parseFloat(searchParams.get('maxPrice') || 'Infinity'); // Valor por defecto de Infinity

  // Función para normalizar y eliminar acentos
  function normalizeString(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // Aplicar filtro de búsqueda si existe
  if (search) {
    const normalizedSearch = normalizeString(search);
    filteredProducts = filteredProducts.filter(product =>
      normalizeString(product.nombre).includes(normalizedSearch) ||
      normalizeString(product.marca).includes(normalizedSearch) ||
      normalizeString(product.vehiculo).includes(normalizedSearch) ||
      normalizeString(product.cod_producto).includes(normalizedSearch) ||
      normalizeString(product.categoria).includes(normalizedSearch)
    );
  }

  // Calcular total de categorías y marcas después del filtro de búsqueda
  let categoryCounts = {};
  let brandCounts = {};
  let vehiculoCounts = {};

  filteredProducts.forEach(product => {
    categoryCounts[product.categoria] = (categoryCounts[product.categoria] || 0) + 1;
    if (categories.length === 0 || categories.includes(product.categoria)) {
      brandCounts[product.marca] = (brandCounts[product.marca] || 0) + 1;
    }
    if (categories.length === 0 || categories.includes(product.categoria)) {
      vehiculoCounts[product.vehiculo] = (vehiculoCounts[product.vehiculo] || 0) + 1;
    }
  });

  let totalCategories = Object.entries(categoryCounts).sort((a, b) => a[0].localeCompare(b[0]));
  let totalBrands = Object.entries(brandCounts).sort((a, b) => a[0].localeCompare(b[0]));
  let totalVehiculos = Object.entries(vehiculoCounts).sort((a, b) => a[0].localeCompare(b[0]));

  // Aplicar otros filtros (precio, categorías, marcas)
  // if (minPrice) {
  //   filteredProducts = filteredProducts.filter(product => product.precio >= minPrice);
  // }
  // if (maxPrice) {
  //   filteredProducts = filteredProducts.filter(product => product.precio <= maxPrice);
  // }

  if (categories.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      categories.map(cat => cat.toLowerCase()).includes(product.categoria.toLowerCase())
    );
  }

  if (brands.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      brands.map(brand => brand.toLowerCase()).includes(product.marca.toLowerCase())
    );
  }

  if (vehiculos.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      vehiculos.map(vehiculo => vehiculo.toLowerCase()).includes(product.vehiculo.toLowerCase())
    );
  }

  // Calcular los conteos después de aplicar todos los filtros
  let filteredCategoryCounts = {};
  let filteredBrandCounts = {};
  let filteredVehiculoCounts = {};

  filteredProducts.forEach(product => {
    filteredCategoryCounts[product.categoria] = (filteredCategoryCounts[product.categoria] || 0) + 1;
    filteredBrandCounts[product.marca] = (filteredBrandCounts[product.marca] || 0) + 1;
    filteredVehiculoCounts[product.vehiculo] = (filteredVehiculoCounts[product.vehiculo] || 0) + 1;
  });

  const filteredCategories = Object.entries(filteredCategoryCounts).sort((a, b) => a[0].localeCompare(b[0]));
  const filteredBrands = Object.entries(filteredBrandCounts).sort((a, b) => a[0].localeCompare(b[0]));
  const filteredVehiculos = Object.entries(filteredVehiculoCounts).sort((a, b) => a[0].localeCompare(b[0]));

  // Paginar productos
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPage = Math.ceil(filteredProducts.length / pageSize);

  // Obtener el precio mínimo y máximo de los productos filtrados
  // const filteredMinPrice = Math.min(...filteredProducts.map(product => product.precio));
  // const filteredMaxPrice = Math.max(...filteredProducts.map(product => product.precio));

  // Obtener el precio mínimo y máximo de todos los productos
  // const totalMinPrice = Math.min(...productsData.map(product => product.precio));
  // const totalMaxPrice = Math.max(...productsData.map(product => product.precio));

  return NextResponse.json({
    products: paginatedProducts,
    totalPage,
    allproductosDestacados,

    totalBrands: totalBrands.map(([brand, count]) => ({ brand, count })),
    totalCategories: totalCategories.map(([category, count]) => ({ category, count })),
    totalVehiculos: totalVehiculos.map(([vehiculo, count]) => ({ vehiculo, count })),

    filteredBrands: filteredBrands.map(([brand, count]) => ({ brand, count })),
    filteredCategories: filteredCategories.map(([category, count]) => ({ category, count })),
    filteredVehiculos: filteredVehiculos.map(([vehiculo, count]) => ({ vehiculo, count })),

    // minPrice: filteredMinPrice,
    // maxPrice: filteredMaxPrice,
    // totalMinPrice,
    // totalMaxPrice
  });
}
