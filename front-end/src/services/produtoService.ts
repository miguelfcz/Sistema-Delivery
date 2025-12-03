import api from './api';

export interface ProdutoInput {
    nome: string;
    descricao: string;
    preco: number;
    imagemUrl?: string;
    estabelecimentoId: number;
}

export interface Produto {
    id: number;
    nome: string;
    descricao: string | null;
    preco: number;
    imagemUrl: string | null;
    estabelecimentoId: number;
}

export const produtoService = {
    criar: async (dados: ProdutoInput) => {
        const response = await api.post<Produto>('/produtos', dados);
        return response.data;
    },

    listarPorEstabelecimento: async (idEstabelecimento: number) => {
        const response = await api.get<Produto[]>('/produtos', {
            params: {
                estabelecimentoId: idEstabelecimento
            }
        });
        return response.data;
    },

    deletar: async (id: number) => {
        await api.delete(`/produtos/${id}`);
    }
};