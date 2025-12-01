import { connectDB } from '../../../../../lib/mongodb';
import Empresa from '../../../../../models/empresaSchema';

// Agregar un presupuesto al historial de una empresa
export async function POST(req, { params }) {
  try {
    await connectDB();
    const data = await req.json();
    
    const empresa = await Empresa.findById(params.id);
    
    if (!empresa) {
      return new Response(JSON.stringify({ error: 'Empresa no encontrada' }), {
        status: 404,
      });
    }

    // Agregar el presupuesto al historial
    empresa.historialPresupuestos.push({
      tipo: data.tipo,
      fecha: data.fecha,
      items: data.items || [],
      pagos: data.pagos || [],
      total: data.total,
      observaciones: data.observaciones,
      pdfUrl: data.pdfUrl,
    });

    await empresa.save();

    return new Response(JSON.stringify({ 
      message: 'Presupuesto agregado exitosamente',
      empresa 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al agregar presupuesto:', error);
    return new Response(JSON.stringify({ error: 'Error al agregar presupuesto' }), {
      status: 500,
    });
  }
}

// Obtener historial de presupuestos de una empresa
export async function GET(req, { params }) {
  try {
    await connectDB();
    
    const empresa = await Empresa.findById(params.id);
    
    if (!empresa) {
      return new Response(JSON.stringify({ error: 'Empresa no encontrada' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({
      historialPresupuestos: empresa.historialPresupuestos || []
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al obtener historial:', error);
    return new Response(JSON.stringify({ error: 'Error al obtener historial' }), {
      status: 500,
    });
  }
}
