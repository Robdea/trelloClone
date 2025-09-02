import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_OWN_API,
    withCredentials: true
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    // Si el error fue 401 y no hemos intentado refrescar aún
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Llamar al refresh
        await api.post("/auth/refresh");
        // Reintentar la petición original
        return api(originalRequest);
      } catch (refreshErr) {
        // Si falla el refresh → redirigir a login
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);