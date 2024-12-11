# React + Vite

## Instalación

1. Clonar el repositorio 

```bash
git clone https://github.com/santiagozin/chaindots.git
```
2. Ejecutar `npm install`
3. Ejecutar `npm run dev`

local: http://localhost:5173/

## LOGIN

username: chaindots
password: chaindots

## API

Para la API se utiliza la API de WeatherAPI, se debe obtener una API key en el siguiente link: https://rapidapi.com/weatherapi/api/weatherapi-com

```
https://weatherapi-com.p.rapidapi.com/forecast.json
```

Crear un archivo .env en la raiz del proyecto y agregar la API key:

```
VITE_API_URL=https://weatherapi-com.p.rapidapi.com/forecast.json
```

query params:

- q: nombre de la ciudad
- days: cantidad de días a mostrar  

headers:

- x-rapidapi-key: API key
- x-rapidapi-host: weatherapi-com.p.rapidapi.com


## DEPLOY

Para el deploy se utiliza Vercel, se debe tener una cuenta en Vercel y configurar el repositorio.

https://chaindots.vercel.app/

## DEPLOY

npm run test

## FUNCIONALIDADES

- Agregar una ciudad a buscador y ejecutar la búsqueda con botón de buscar
- Ver el clima de una ciudad
- Agregar ciudad a favoritos
- Ver el clima de las ciudades favoritas

