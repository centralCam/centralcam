'use client';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaChartBar } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import Loading from '../../Loading/Loading';

export default function EstadisticasWhatsApp() {
  const [data, setData] = useState(null);
  const [periodo, setPeriodo] = useState('30');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [periodo]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/whatsapp-stats?periodo=${periodo}`);
      if (!response.ok) {
        throw new Error('Error al cargar las estadísticas');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error('Error fetching WhatsApp stats:', err);
      setError('No se pudieron cargar las estadísticas de WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="p-4 text-red-600 bg-red-100 rounded-md">{error}</div>;
  }

  if (!data) {
    return null;
  }

  const formatNumber = (num) => {
    return new Intl.NumberFormat('es-AR').format(num);
  };

  // Datos para el gráfico de pastel
  const pieData = [
    { name: 'Administración', value: data.totales.administracion, color: '#3b82f6' },
    { name: 'Ventas', value: data.totales.ventas, color: '#10b981' },
  ];

  // Calcular porcentajes
  const porcentajeAdministracion = data.totales.total > 0
    ? ((data.totales.administracion / data.totales.total) * 100).toFixed(1)
    : 0;
  const porcentajeVentas = data.totales.total > 0
    ? ((data.totales.ventas / data.totales.total) * 100).toFixed(1)
    : 0;

  return (
    <div className="p-4 space-y-6 bg-gray-50 rounded-md shadow-md">
      <div className="flex items-center justify-between border-b pb-3 mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
          <FaWhatsapp className="text-green-500" />
          Estadísticas de WhatsApp
        </h2>
        
        <div className="flex items-center gap-2">
          <label htmlFor="periodo" className="text-sm font-medium text-gray-700">
            Período:
          </label>
          <select
            id="periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="7">Últimos 7 días</option>
            <option value="30">Últimos 30 días</option>
            <option value="90">Últimos 90 días</option>
            <option value="180">Últimos 6 meses</option>
            <option value="365">Último año</option>
          </select>
        </div>
      </div>

      {/* Tarjetas de Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Administración</h3>
          <p className="text-4xl font-bold">{formatNumber(data.totales.administracion)}</p>
          <p className="text-sm mt-2 opacity-90">{porcentajeAdministracion}% del total</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Ventas</h3>
          <p className="text-4xl font-bold">{formatNumber(data.totales.ventas)}</p>
          <p className="text-sm mt-2 opacity-90">{porcentajeVentas}% del total</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Total de Clics</h3>
          <p className="text-4xl font-bold">{formatNumber(data.totales.total)}</p>
          <p className="text-sm mt-2 opacity-90">En {periodo} días</p>
        </div>
      </div>

      {/* Gráfico de Pastel */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
          <FaChartBar className="text-indigo-600" />
          Distribución de Clics
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => formatNumber(value)} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Barras por Día */}
      {data.porDia && data.porDia.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Clics por Día</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data.porDia}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="fecha" />
              <YAxis />
              <Tooltip formatter={(value) => formatNumber(value)} />
              <Legend />
              <Bar dataKey="administracion" fill="#3b82f6" name="Administración" />
              <Bar dataKey="ventas" fill="#10b981" name="Ventas" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Gráfico de Líneas */}
      {data.porDia && data.porDia.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Tendencia de Clics</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data.porDia}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="fecha" />
              <YAxis />
              <Tooltip formatter={(value) => formatNumber(value)} />
              <Legend />
              <Line
                type="monotone"
                dataKey="administracion"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Administración"
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="ventas"
                stroke="#10b981"
                strokeWidth={2}
                name="Ventas"
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
