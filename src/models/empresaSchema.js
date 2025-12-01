import mongoose from 'mongoose';

const presupuestoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ['presupuesto', 'recibo'],
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  items: [{
    cantidad: Number,
    producto: String,
    codigo: String,
    precio: Number,
    usd: Boolean,
  }],
  pagos: [{
    tipo: String,
    monto: Number,
    CH_n: String,
    Bco: String,
    cuit: String,
    date: Date,
  }],
  total: {
    type: Number,
    required: true,
  },
  observaciones: String,
  pdfUrl: String, // Para almacenar la URL o ruta del PDF si se guarda
}, {
  timestamps: true,
});

const empresaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  direccion: {
    type: String,
    trim: true,
  },
  localidad: {
    type: String,
    trim: true,
  },
  mail: {
    type: String,
    trim: true,
    lowercase: true,
  },
  telefono: {
    type: String,
    trim: true,
  },
  cuil: {
    type: String,
    trim: true,
  },
  observaciones: {
    type: String,
    trim: true,
  },
  tipo: {
    type: String,
    trim: true,
    enum: ['Consumidor Final', 'Monotributo Social', 'Monotributo', 'Exento', 'No Responsable', 'Responsable inscripto'], // Opcional: si querés limitar los valores posibles
  },
  historialPresupuestos: [presupuestoSchema],
}, {
  timestamps: true, // Para guardar createdAt y updatedAt automáticamente
});

export default mongoose.models.Empresa || mongoose.model('Empresa', empresaSchema);
