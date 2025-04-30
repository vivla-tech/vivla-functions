# Backend API con Node.js y Express

Este es un mini backend para organizar todas las funciones que no pertenecen a los proyecto grandes de VIVLA

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
```bash
npm install
```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```
PORT=3000
FACTORIAL_API_KEY=tu_api_key
```

## Uso

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

Para iniciar el servidor en modo producción:
```bash
npm start
```

## Endpoints disponibles

- `GET /`: Mensaje de bienvenida
- `GET /api/status`: Estado del servidor
- `GET /api/factorial/jobs`: Obtener ofertas de trabajo de Factorial

## Estructura del proyecto

```
.
├── src/
│   ├── config/                 # Configuración centralizada
│   │   
│   ├── controllers/            # Controladores de la aplicación
│   │   
│   ├── services/               # Servicios y lógica de negocio
│   │  
│   ├── routes/                 # Definición de rutas
│   │    
│   └── index.js                # Punto de entrada de la aplicación
├── .env                        # Variables de entorno
├── package.json               # Dependencias y scripts
└── README.md                 # Documentación
```

## Arquitectura

El proyecto sigue una arquitectura modular con separación clara de responsabilidades:

- **Config**: Maneja la configuración de la aplicación y variables de entorno
- **Controllers**: Gestiona las peticiones HTTP y respuestas
- **Services**: Contiene la lógica de negocio y llamadas a APIs externas
- **Routes**: Define las rutas de la API y su mapeo a controladores


