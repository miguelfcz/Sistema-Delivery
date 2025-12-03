export interface ItemCarrinho {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagemUrl?: string;
    estabelecimentoId: number;
}

const CHAVE_CARRINHO = '@Cardapiu:carrinho';

export const carrinhoService = {
    adicionarItem: (item: ItemCarrinho) => {
        const carrinhoAtual = carrinhoService.obterCarrinho();
        const indexExistente = carrinhoAtual.findIndex(i => i.id === item.id);

        if (indexExistente >= 0) {
            carrinhoAtual[indexExistente].quantidade += item.quantidade;
        } else {
            carrinhoAtual.push(item);
        }

        localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinhoAtual));
    },

    obterCarrinho: (): ItemCarrinho[] => {
        const strCarrinho = localStorage.getItem(CHAVE_CARRINHO);
        if (!strCarrinho) return [];
        return JSON.parse(strCarrinho);
    },

    atualizarQuantidade: (id: number, novaQuantidade: number) => {
        const carrinho = carrinhoService.obterCarrinho();
        const novoCarrinho = carrinho.map(item => {
            if (item.id === id) {
                return  {...item, quantidade: novaQuantidade};
            }
            return item;
        }).filter(item => item.quantidade > 0);

        localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(novoCarrinho));
        return novoCarrinho;
    },

    limparCarrinho: () => {
        localStorage.removeItem(CHAVE_CARRINHO);
    }
};