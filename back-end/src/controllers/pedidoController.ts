import { Request, Response } from 'express';
import { StatusPedido } from '../../generated/prisma';
import { PedidoService } from '../services/pedidoService';

const pedidoService = new PedidoService();

interface AuthRequest extends Request {
    user?: { id: number };
}

export class PedidoController {

    async create(req: AuthRequest, res: Response): Promise<Response> {
        const { estabelecimentoId, itens, endereco } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioId = req.user.id;

        if (!estabelecimentoId || !itens || !Array.isArray(itens) || itens.length === 0 || !endereco) {
            return res.status(400).json({ message: 'Estabelecimento, itens e endereço são obrigatórios.' });
       }

        try {
            const novoPedido = await pedidoService.createPedido({ usuarioId, estabelecimentoId, itens, endereco });
            return res.status(201).json(novoPedido);
        } catch (error) {
            // 🚨 ADICIONE ESTA LINHA para ver o erro no console do backend 🚨
            console.error('Erro detalhado ao criar pedido:', error);

            if (error instanceof Error) {
                if (error.message.includes('Produto não encontrado')) {
                    return res.status(404).json({ message: error.message });
                }
                // 💡 RETORNA A MENSAGEM DO ERRO PRISMA
                return res.status(500).json({ message: `Erro Interno Detalhado: ${error.message}` });
            }
            return res.status(500).json({ message: 'Um erro inesperado ocorreu ao criar o pedido.' });
        }
    }

    async findAllByUser(req: AuthRequest, res: Response): Promise<Response> {
        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioId = req.user.id;

        try {
            const pedidos = await pedidoService.findPedidosByUsuario(usuarioId);
            return res.status(200).json(pedidos);
        } catch (error) {
            return res.status(500).json({ message: 'Erro interno ao listar pedidos.' });
        }
    }

    async cancelar(req: AuthRequest, res: Response): Promise<Response> {
        const pedidoId = parseInt(req.params.id);

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado. Faça o login para continuar.' });
        }
        const usuarioClienteId = req.user.id;

        try {
            const pedidoCancelado = await pedidoService.cancelarPedido(pedidoId, usuarioClienteId);
            return res.status(200).json(pedidoCancelado);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('não encontrado')) {
                    return res.status(404).json({ message: error.message });
                }
                if (error.message.includes('Permissão negada')) {
                    return res.status(403).json({ message: error.message });
                }
                if (error.message.includes('Não é possível cancelar')) {
                    return res.status(400).json({ message: error.message });
                }
            }
            return res.status(500).json({ message: 'Um erro inesperado ocorreu ao cancelar o pedido.' });
        }
    }

    async findAllByEstabelecimento(req: AuthRequest, res: Response): Promise<Response> {
        const {id} = req.query;

        if (!req.user) {
            return res.status(401).json({message: 'Acesso não autorizado.'});
        }

        if (!id) {
            return res.status(400).json({message: 'O parâmetro estabelecimentoId é obrigatório.'});
        }

        const usuarioDonoId = req.user.id;
        const estabelecimentoId = parseInt(id as string);

        try {
            const pedidos = await pedidoService.findPedidoByEstabelecimento(estabelecimentoId, usuarioDonoId);
            return res.status(200).json(pedidos);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('Estabelecimento não encontrado')) return res.status(404).json({message: error.message});
                if (error.message.includes('Permissão negada')) return res.status(403).json({message: error.message});
            }
            return res.status(500).json({message: 'Erro interno ao listar pedidos do estabelecimento.'});
        }
    }

    async updateStatus(req: AuthRequest, res: Response): Promise<Response> {
        const pedidoId = parseInt(req.params.id);
        const { status } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }

        if (!status || !Object.values(StatusPedido).includes(status)) {
            return res.status(400).json({ message: 'Status inválido ou não fornecido.' });
        }

        const usuarioDonoId = req.user.id;

        try{
            const pedidoAtualizado = await pedidoService.updateStatusPedido(pedidoId, status, usuarioDonoId);
            return res.status(200).json(pedidoAtualizado);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('Pedido não encontrado')) return res.status(404).json({ message: error.message });
                if (error.message.includes('Permissão negada')) return res.status(403).json({ message: error.message });
                if (error.message.includes('Não é possível alterar')) return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro interno ao atualizar status do pedido.' });
        }
    }
}