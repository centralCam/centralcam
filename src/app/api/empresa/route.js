import { connectDB } from '../../../lib/mongodb';
import Empresa from '../../../models/empresaSchema';

export async function GET() {
  await connectDB();
  const empresas = await Empresa.find();
  return Response.json(empresas);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const nuevaEmpresa = await Empresa.create(data);
  return Response.json(nuevaEmpresa, { status: 201 });
}
