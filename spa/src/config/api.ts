import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:4545'
});

api.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    console.error('401: Não autorizado'); // Reenvia a requisição original
  }
});

export {
  api
}