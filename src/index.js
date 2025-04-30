import express from 'express';
import cors from 'cors';
import { config } from './config/config.js';
import dotenv from 'dotenv';
import factorialRoutes from './routes/jobsRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
    res.json({ message: '¡Bienvenido a la API!' });
});

// Ejemplo de ruta de API
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        timestamp: new Date().toISOString()
    });
});

// Rutas de Factorial
app.use('/api/v1', factorialRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: '¡Algo salió mal!' });
});

// Iniciar el servidor
app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${config.PORT}`);
}); 