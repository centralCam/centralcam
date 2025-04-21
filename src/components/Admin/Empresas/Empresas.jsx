'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';

export default function EmpresaForm() {
  const [empresas, setEmpresas] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    mail: '',
    telefono: '',
    cuil: '',
    observaciones: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const empresasPorPagina = 5;

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const fetchEmpresas = async () => {
    const res = await fetch('/api/empresa');
    const data = await res.json();
    setEmpresas(data);
    setPaginaActual(1);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre) {
      alert('Falta el nombre de la empresa.');
      return;
    }

    const res = await fetch(editingId ? `/api/empresa/${editingId}` : '/api/empresa', {
      method: editingId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      fetchEmpresas();
      setForm({ nombre: '', direccion: '', mail: '', telefono: '', cuil: '', observaciones: '' });
      setEditingId(null);
    }
  };

  const handleEdit = (empresa) => {
    setForm(empresa);
    setEditingId(empresa._id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/empresa/${id}`, { method: 'DELETE' });
    fetchEmpresas();
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPaginaActual(1);
  };

  const empresasFiltradas = empresas.filter((e) =>
    e.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalPaginas = Math.ceil(empresasFiltradas.length / empresasPorPagina);
  const empresasPaginadas = empresasFiltradas.slice(
    (paginaActual - 1) * empresasPorPagina,
    paginaActual * empresasPorPagina
  );

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Administrar Empresa</h1>
      {/* Buscador */}
      <div className="mb-6">
        <TextField
          label="Buscar empresa por nombre"
          variant="outlined"
          fullWidth
          value={busqueda}
          onChange={handleBusqueda}
        />
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {['nombre', 'direccion', 'mail', 'telefono', 'cuil', 'observaciones'].map((field) => (
          <Input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          />
        ))} 
        <div className="flex gap-4">
            <Button type="submit" className="col-span-1 md:col-span-2 w-40">
            {editingId ? 'Actualizar Empresa' : 'Crear Empresa'}
            </Button>
            {editingId && (
                <Button type="button" variant="outline" className="col-span-1 md:col-span-2 bg-red-500 text-white w-40" onClick={() => {
                    setForm({ nombre: '', direccion: '', mail: '', telefono: '', cuil: '', observaciones: '' });
                    setEditingId(null);
                }}>
                Cancelar
                </Button>
            )}
        </div>
      </form>


      {/* Lista paginada */}
      <div className="grid gap-4">
        {empresasPaginadas.map((empresa) => (
          <Card key={empresa._id} className="p-4">
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold">{empresa.nombre}</p>
              <p>{empresa.direccion}</p>
              <p>{empresa.mail}</p>
              <p>{empresa.telefono}</p>
              <p>{empresa.cuil}</p>
              <p>{empresa.observaciones}</p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" onClick={() => handleEdit(empresa)}>
                  Editar
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(empresa._id)}>
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Paginador */}
      {totalPaginas > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination
            count={totalPaginas}
            page={paginaActual}
            onChange={(_, page) => setPaginaActual(page)}
            color="primary"
          />
        </div>
      )}
    </div>
  );
}
