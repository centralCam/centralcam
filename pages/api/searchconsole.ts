import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { JWT } from 'google-auth-library'; // Importar explícitamente

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Asegúrate de que esta URL sea tu dominio EXACTO registrado en Google Search Console.
  // Por ejemplo, si está registrado como "https://www.tudominio.com", úsalo así.
  const siteUrl = 'https://centralcamshop.com';

  // Configuración de la autenticación con la clave de servicio de Google.
  // La clave se carga desde el archivo JSON que debe estar en 'keys/gsc-key.json'
  // Este archivo NO debe subirse a tu repositorio Git (ya lo gestionamos con .gitignore).
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), 'keys', 'gsc-key.json'),
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'], // Permiso de solo lectura para Search Console
  });

  // Obtener el cliente de autenticación. Se especifica el tipo JWT para TypeScript.
  const client = await auth.getClient() as JWT;

  // Inicializar el cliente de la API de Google Search Console.
  const searchconsole = google.searchconsole({ version: 'v1', auth: client });

  // Obtener la fecha de hoy para calcular los rangos de fechas.
  const today = new Date();
  // Función auxiliar para formatear fechas a 'YYYY-MM-DD', que es el formato requerido por la API.
  const formatDate = (d: Date) => d.toISOString().slice(0, 10);

  /**
   * Obtiene datos generales (clics, impresiones, CTR, posición) para un número de días dado.
   * La dimensión se deja vacía para obtener el total del sitio.
   */
  const getData = async (days: number) => {
    const endDate = formatDate(today);
    const startDate = formatDate(new Date(today.getTime() - days * 24 * 60 * 60 * 1000)); // Resta días para obtener la fecha de inicio

    const response = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: [], // No se especifica dimensión para obtener totales del sitio
      },
    });

    // La API devuelve un array de 'rows'. Si no hay datos, 'rows' puede ser undefined o vacío.
    const row = response.data.rows?.[0]; // Tomamos la primera fila (para totales, solo hay una)

    return {
      startDate,
      endDate,
      clicks: row?.clicks || 0,
      impressions: row?.impressions || 0,
      ctr: row?.ctr || 0,
      position: row?.position || 0,
    };
  };

  /**
   * Obtiene las palabras clave (queries) principales para un número de días dado,
   * con un límite de filas para obtener solo las N más relevantes.
   */
  const getTopQueries = async (days: number, rowLimit: number = 10) => {
    const endDate = formatDate(today);
    const startDate = formatDate(new Date(today.getTime() - days * 24 * 60 * 60 * 1000));

    const response = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'], // Especificar 'query' para obtener las palabras clave
        rowLimit: rowLimit,    // Limitar el número de resultados (ej: top 10 o 20)
        // Puedes añadir 'metrics' si quieres especificar cuáles, por defecto trae clicks, impressions, ctr, position
        // metrics: ['clicks', 'impressions', 'ctr', 'position'],
      },
    });

    // Mapear los resultados para un formato más limpio y accesible
    return response.data.rows?.map(row => ({
      query: row.keys?.[0] || 'N/A', // La palabra clave siempre está en keys[0] cuando la dimensión es 'query'
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      ctr: row.ctr || 0,
      position: row.position || 0,
    })) || []; // Retorna un array vacío si no hay filas
  };

  try {
    // Ejecutar todas las peticiones a la API en paralelo para mayor eficiencia
    const [last7, last28, last90, topQueriesLast28Days] = await Promise.all([
      getData(7),          // Datos generales de los últimos 7 días
      getData(28),         // Datos generales de los últimos 28 días
      getData(90),         // Datos generales de los últimos 3 meses (90 días)
      getTopQueries(90, 10), // Las 20 palabras clave principales de los últimos 28 días
    ]);

    // Enviar todos los datos combinados en la respuesta JSON
    res.status(200).json({
      last7,
      last28,
      last90,
      topQueriesLast28Days,
    });
  } catch (error: any) {
    // Manejo de errores: loguear el error y enviar una respuesta de error al cliente
    console.error('Error fetching Google Search Console data:', error.message);
    res.status(500).json({
      error: 'Error al obtener los datos de Google Search Console.',
      details: error.message,
      // Opcional: mostrar el stack trace solo en entorno de desarrollo para depuración
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
}