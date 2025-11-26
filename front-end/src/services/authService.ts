import api from './api';

interface LoginResponse {
    token: string;
}

export const authService = {
    login: async (email: string, senha: string) => {
        const response = await api.post<LoginResponse>('/auth/login', {
            email,
            senha
        });

        return response.data;
    }
};