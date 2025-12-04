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
export const cadastroService ={
    cadastro: async (nome: string, email: string, senha: string) => {
    // Corrigido: Removido o '/api' duplicado do endpoint
    const response = await api.post<LoginResponse>('/usuarios', {
        nome,
        email,
        senha
    });
    return response.data;
    }
};