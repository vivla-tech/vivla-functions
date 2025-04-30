import fetch from 'node-fetch';
import FACTORIAL_CONFIG from '../config/factorial.js';

const headers = {
    'x-api-key': FACTORIAL_CONFIG.FACTORIAL_API_KEY,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

const handleApiError = async (response) => {
    const errorText = await response.text();
    console.error('Respuesta de la API:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
    });
    throw new Error(`Error en la API de Factorial: ${response.status} - ${errorText}`);
};

export const getJobs = async () => {
    const response = await fetch(FACTORIAL_CONFIG.FACTORIAL_API_URL, {
        method: 'GET',
        headers
    });

    if (!response.ok) {
        await handleApiError(response);
    }

    return response.json();
}; 