// Next.js App Router – genera /sitemap.xml automáticamente
// Revalida cada 6 horas para productos actualizados
export const revalidate = 21600; // 6 horas

import { connectDB } from '../lib/mongodb';
import Producto from '../models/product';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://centralcamshop.com';

// Helpers
const toSlug = (nombre = '') =>
  encodeURIComponent(String(nombre).trim().replace(/\s+/g, '_'));

export default async function sitemap() {
  // 1) Rutas estáticas con prioridades
  const staticEntries = [
    { 
      url: `${SITE}`, 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    { 
      url: `${SITE}/nosotros`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Agrega aquí tus landings si las tienes:
    // { 
    //   url: `${SITE}/starlink-mini`, 
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.9,
    // },
  ];

  // 2) Rutas dinámicas de productos desde Mongo
  let productEntries = [];
  try {
    await connectDB();
    const productos = await Producto
      .find({ vendido: { $ne: true } }, { nombre: 1, updatedAt: 1, foto_1_1: 1, categoria: 1 })
      .sort({ updatedAt: -1 })
      .lean();

    productEntries = productos
      .filter(p => p?.nombre)
      .map(p => {
        const slug = toSlug(p.nombre);
        return {
          url: `${SITE}/productos/${slug}`,
          lastModified: p.updatedAt || new Date(),
          changeFrequency: 'weekly',
          priority: 0.9,
          // Next soporta imágenes en el sitemap (útil para rich results de imágenes)
          images: p.foto_1_1 ? [{
            url: p.foto_1_1,
            title: p.nombre,
            caption: `${p.nombre} - ${p.categoria || 'Repuestos para camiones'}`
          }] : undefined,
        };
      });
  } catch (e) {
    // Si falla la DB, devolvemos solo las estáticas
    console.error('Sitemap DB error:', e);
  }

  // 3) Retornar todas las URLs
  return [...staticEntries, ...productEntries];
}
