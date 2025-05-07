import { getJobs, getJobById } from '../services/factorialService.js';

export const getFactorialJobs = async (req, res) => {
    try {
        const jobs = await getJobs();
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error al obtener datos de Factorial HR:', error);
        res.status(500).json({
            error: 'Error al obtener ofertas de trabajo',
            message: error.message,
            details: error.stack
        });
    }
};

export const getFactorialJobById = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await getJobById(id);
        res.status(200).json(job);
    } catch (error) {
        console.error('Error al obtener datos de Factorial HR:', error);
        res.status(500).json({
            error: 'Error al obtener ofertas de trabajo',
            message: error.message,
            details: error.stack
        });
    }
};