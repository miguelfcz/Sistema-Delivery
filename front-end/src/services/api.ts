import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
    // 1. Corrigido para usar a chave correta do localStorage
    const token = localStorage.getItem('@Cardapiu:token');

    if (token) {
        // 2. Corrigido para adicionar o espaço depois de "Bearer"
        config.headers.Authorization = 'Bearer ' + token;

    }
    return config;
});

export default api;