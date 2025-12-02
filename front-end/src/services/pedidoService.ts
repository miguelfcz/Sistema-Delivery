import api from './api';

export interface ItemPedido {
    produtoId: number;
    quantidade: number;
}

export interface PedidoInput {
    estabelecimentoId: number;
    itens: ItemPedido[];
    endereco: string;
}

export const  pedidoService = { //criando pedido
    criar: async (dados: PedidoInput) => {
        const response = await api.post('/pedidos', dados);
        return response.data;
    },

    listarMeus: async () => {
        const response = await api.get('/pedidos');
        return response.data;
    },

    listarPorEstabelecimento: async (idEstabelecimento: number) => {
        const response = await api.get('/pedidos/estalecimento?id=${idEstabelecimento}');
        return response.data;
    },

    atualizarStatus: async (idPedido: number, status: string) => {
        const response = await api.put('/pedidos/${idPedido}/status', {status});
        return response.data;
    }
}