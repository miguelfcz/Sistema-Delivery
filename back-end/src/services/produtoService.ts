import prisma from '../db/prisma';
import { Produto } from '../../generated/prisma';

type ProdutoCreateData = Omit<Produto, 'id' | 'createdAt' | 'updatedAt'>;

export class ProdutoService {

    async createProduto(dadosProduto: ProdutoCreateData, usuarioDonoId: number): Promise<Produto> {
        const estabelecimento = await prisma.estabelecimento.findUnique({
            where: { id: dadosProduto.estabelecimentoId },
        });

        if (!estabelecimento) {
            throw new Error('Estabelecimento não encontrado.');
        }

        if (estabelecimento.usuarioId !== usuarioDonoId) {
            throw new Error('Permissão negada. Você não é o dono deste estabelecimento.');
        }
        
        return prisma.produto.create({
            data: dadosProduto,
        });
    }

    async updateProduto(produtoId: number, dadosProduto: Partial<Produto>, usuarioDonoId: number): Promise<Produto> {
        const produto = await prisma.produto.findUnique({
            where: { id: produtoId },
            select: { estabelecimento: { select: { usuarioId: true } } }
        });

        if (!produto) {
            throw new Error('Produto não encontrado.'); 
        }
        
        if (produto.estabelecimento.usuarioId !== usuarioDonoId) {
            throw new Error('Permissão negada. Apenas o dono pode editar este produto.'); 
        }

        const produtoAtualizado = await prisma.produto.update({
            where: { id: produtoId },
            data: dadosProduto,
        });

        return produtoAtualizado;
    }

    async findProdutoById(produtoId: number): Promise<Produto | null> {
        return prisma.produto.findUnique({
            where: { id: produtoId },
            include: {
                estabelecimento: {
                    select: { nome: true }
                }
            }
        });
    }

    async deleteProduto(produtoId: number, usuarioDonoId: number): Promise<Produto> {
        const produto = await prisma.produto.findUnique({
            where: { id: produtoId },
            select: { estabelecimento: { select: { usuarioId: true } } }
        });

        if (!produto) {
            throw new Error('Produto não encontrado.');
        }

        if (produto.estabelecimento.usuarioId !== usuarioDonoId) {
            throw new Error('Permissão negada. Apenas o dono pode deletar este produto.');
        }

        return prisma.produto.delete({ where: { id: produtoId } });
    }

    async findProdutosByEstabelecimento(estabelecimentoId: number) {
        return prisma.produto.findMany({
            where: { estabelecimentoId: estabelecimentoId },
        });
    }
}