import { Request, Response } from 'express';
import { EstabelecimentoService } from '../services/estabelecimentoService';

const estabelecimentoService = new EstabelecimentoService();

interface AuthRequest extends Request {
    user?: { id: number };
}

export class EstabelecimentoController {

    async create(req: AuthRequest, res: Response): Promise<Response> {
        const { nome, endereco } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioId = req.user.id;

        if (!nome) {
            return res.status(400).json({ message: 'O nome do estabelecimento é obrigatório.' });
        }

        try {
            const novoEstabelecimento = await estabelecimentoService.create({ nome, endereco, usuarioId, ativo: true });
            return res.status(201).json(novoEstabelecimento);
        } catch (error) {
            return res.status(500).json({ message: 'Erro interno ao criar estabelecimento.' });
        }
    }

    async update(req: AuthRequest, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const { nome, endereco } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioDonoId = req.user.id;

        try {
            const estabelecimento = await estabelecimentoService.update(id, { nome, endereco }, usuarioDonoId);
            return res.status(200).json(estabelecimento);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('não encontrado')) return res.status(404).json({ message: error.message });
                if (error.message.includes('Permissão negada')) return res.status(403).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro interno ao atualizar estabelecimento.' });
        }
    }

    async deactivate(req: AuthRequest, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioDonoId = req.user.id;

        try {
            const estabelecimento = await estabelecimentoService.deactivate(id, usuarioDonoId);
            return res.status(200).json(estabelecimento);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('não encontrado')) return res.status(404).json({ message: error.message });
                if (error.message.includes('Permissão negada')) return res.status(403).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro interno ao desativar estabelecimento.' });
        }
    }

    async findById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        try {
            const estabelecimento = await estabelecimentoService.findById(id);
            if (!estabelecimento) {
                return res.status(404).json({ message: 'Estabelecimento não encontrado.' });
            }
            return res.status(200).json(estabelecimento);
        } catch (error) {
            return res.status(500).json({ message: 'Erro interno ao buscar estabelecimento.' });
        }
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const estabelecimentos = await estabelecimentoService.findAll();
            return res.status(200).json(estabelecimentos);
        } catch (error) {
            return res.status(500).json({ message: 'Erro interno ao listar estabelecimentos.' });
        }
    }
}