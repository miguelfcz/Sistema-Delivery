import prisma from '../db/prisma';
import { Pedido, StatusPedido } from '../../generated/prisma';

interface ItemInput {
    produtoId: number;
    quantidade: number;
}

interface PedidoCreateInput {
    usuarioId: number;
    estabelecimentoId: number;
    itens: ItemInput[];
}

export class PedidoService {

    async createPedido(data: PedidoCreateInput): Promise<Pedido> {
        
        const { usuarioId, estabelecimentoId, itens } = data;
        
        const novoPedido = await prisma.$transaction(async (tx) => {
            let totalGeral = 0;
            const itensDoPedidoParaCriar = [];

            for (const item of itens) {
                const produto = await tx.produto.findUnique({
                    where: { id: item.produtoId },
                    select: { preco: true, estabelecimentoId: true }
                });

                if (!produto || produto.estabelecimentoId !== estabelecimentoId) {
                    throw new Error(`Produto com ID ${item.produtoId} não foi encontrado ou não pertence a este estabelecimento.`);
                }

                const precoUnitario = produto.preco; 
                totalGeral += precoUnitario * item.quantidade;

                itensDoPedidoParaCriar.push({
                    produtoId: item.produtoId,
                    quantidade: item.quantidade,
                    precoUnitario: precoUnitario,
                });
            }

            const pedido = await tx.pedido.create({
                data: {
                    usuarioId: usuarioId,
                    estabelecimentoId: estabelecimentoId,
                    total: totalGeral,
                    status: StatusPedido.PENDENTE,
                }
            });

            const itensComPedidoId = itensDoPedidoParaCriar.map(item => ({
                ...item,
                pedidoId: pedido.id,
            }));

            await tx.pedidoItem.createMany({
                data: itensComPedidoId,
            });

            return pedido;
        });

        return novoPedido; 
    }

    async findPedidosByUsuario(usuarioId: number): Promise<Pedido[]> {
        return prisma.pedido.findMany({
            where: { usuarioId },
            include: {
                itens: {
                    include: {
                        produto: {
                            select: { nome: true }
                        }
                    }
                },
                estabelecimento: {
                    select: { nome: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }

    async cancelarPedido(pedidoId: number, usuarioClienteId: number): Promise<Pedido> {
        const pedido = await prisma.pedido.findUnique({
            where: { id: pedidoId },
        });

        if (!pedido) {
            throw new Error('Pedido não encontrado.');
        }

        if (pedido.usuarioId !== usuarioClienteId) {
            throw new Error('Permissão negada. Você só pode cancelar seus próprios pedidos.');
        }

        if (pedido.status !== StatusPedido.PENDENTE) {
            throw new Error('Não é possível cancelar um pedido que já está em preparo ou foi concluído.');
        }

        return prisma.pedido.update({
            where: { id: pedidoId },
            data: { status: StatusPedido.CANCELADO },
        });
    }
}