import { Request, Response } from 'express';
import { PedidoService } from '../services/pedidoService';

const pedidoService = new PedidoService();

interface AuthRequest extends Request {
    user?: { id: number };
}

export class PedidoController {

    async create(req: AuthRequest, res: Response): Promise<Response> {
        const { estabelecimentoId, itens } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioId = req.user.id;

        if (!estabelecimentoId || !itens || !Array.isArray(itens) || itens.length === 0) {
            return res.status(400).json({ message: 'Os campos estabelecimentoId e uma lista de itens são obrigatórios.' });
        }

        try {
            const novoPedido = await pedidoService.createPedido({ usuarioId, estabelecimentoId, itens });
            return res.status(201).json(novoPedido);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('Produto não encontrado')) {
                    return res.status(404).json({ message: error.message });
                }
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
}