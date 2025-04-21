import mongoose from 'mongoose';

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
    enum: ['presupuesto', 'recibo', 'ambos'], // Opcional: si querés limitar los valores posibles
  }
}, {
  timestamps: true, // Para guardar createdAt y updatedAt automáticamente
});

export default mongoose.models.Empresa || mongoose.model('Empresa', empresaSchema);
