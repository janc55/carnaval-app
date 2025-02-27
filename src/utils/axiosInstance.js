import axios from 'axios';

// Crear una instancia de Axios con la URL base de tu API
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1', // URL de tu API Laravel
  withCredentials: true, // Esto es necesario para que Sanctum maneje las cookies
});

// Función para enviar el token en cada petición (si es necesario)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
