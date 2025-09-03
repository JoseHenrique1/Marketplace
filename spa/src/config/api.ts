import { useAuthStore } from "@/stores/auth-store";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response, 
  async (error) => {
  if (error.response?.status === 401) {
    useAuthStore.getState().logout();
  }
});

export {
  api
}