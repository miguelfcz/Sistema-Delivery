import api from './api';

export interface EstabelecimentoInput {
    nome: string;
    endereco: string;
    cnpj?: string;
    descricao?: string;
    capaUrl?: string;

}

export interface Estabelecimento {
    id: number;
    nome: string;
    endereco: string | null;
    descricao: string | null;
    cnpj: string | null;
    capaUrl: string | null;
    ativo: boolean;
    usuarioId: number;
}

export const estabelecimentoService = {
    uploadImagem: async (arquivo: File) => {
        const formData = new FormData();
        formData.append('file', arquivo);

        const response = await api.post<{ url: string}>('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data.url;
    },

    criar: async (dados: EstabelecimentoInput) => {
        const response = await api.post<Estabelecimento>('/estabelecimentos', dados);
        return response.data;
    },

    listarTodos: async () => {
        const response = await api.get<Estabelecimento[]>('/estabelecimentos');
        return response.data;
    },

    buscarPorId: async (id: number) => {
        const response = await api.get<Estabelecimento>(`/estabelecimentos/${id}`);
        return response.data;
    },

    buscarPorNome: async (nome: string) => {
        const response = await api.get(`/estabelecimentos/nome/${encodeURIComponent(nome)}`);
        return response.data;
    }
};