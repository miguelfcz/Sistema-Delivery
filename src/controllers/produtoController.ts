import { Request, Response } from 'express';
import { ProdutoService } from '../services/produtoService';

const produtoService = new ProdutoService();
interface AuthRequest extends Request {
    user?: { id: number };
}

export class ProdutoController {

    async create(req: AuthRequest, res: Response): Promise<Response> {
        const { nome, descricao, preco, estabelecimentoId } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioDonoId = req.user.id;

        try {
            if (!nome || !preco || !estabelecimentoId) {
                return res.status(400).json({ message: 'Nome, preço e estabelecimentoId são obrigatórios.' });
            }

            const novoProduto = await produtoService.createProduto({ nome, descricao, preco, estabelecimentoId }, usuarioDonoId);
            return res.status(201).json(novoProduto);

        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('Permissão negada')) return res.status(403).json({ message: error.message });
                if (error.message.includes('não encontrado')) return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Um erro inesperado ocorreu ao criar o produto.' });
        }
    }

    async update(req: AuthRequest, res: Response): Promise<Response> {
        const produtoId = parseInt(req.params.id);
        const { nome, descricao, preco } = req.body;
        
        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioDonoId = req.user.id;
        
        try {
            const produtoAtualizado = await produtoService.updateProduto(produtoId, { nome, descricao, preco }, usuarioDonoId);
            return res.status(200).json(produtoAtualizado);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('Permissão negada')) return res.status(403).json({ message: error.message });
                if (error.message.includes('não encontrado')) return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Um erro inesperado ocorreu.' });
        }
    }

    async delete(req: AuthRequest, res: Response): Promise<Response> {
        const produtoId = parseInt(req.params.id);

        if (!req.user) {
            return res.status(401).json({ message: 'Acesso não autorizado.' });
        }
        const usuarioDonoId = req.user.id;

        try {
            await produtoService.deleteProduto(produtoId, usuarioDonoId);
            return res.status(204).send(); 
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('Permissão negada')) return res.status(403).json({ message: error.message });
                if (error.message.includes('não encontrado')) return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Um erro inesperado ocorreu.' });
        }
    }

    async findById(req: Request, res: Response): Promise<Response> {
        const produtoId = parseInt(req.params.id);

        try {
            const produto = await produtoService.findProdutoById(produtoId);
            if (!produto) {
                return res.status(404).json({ message: 'Produto não encontrado.' });
            }
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ message: 'Erro interno ao buscar produto.' });
        }
    }

    async listByEstabelecimento(req: Request, res: Response): Promise<Response> {
        const { estabelecimentoId } = req.query;

        if (!estabelecimentoId) {
            return res.status(400).json({ message: 'O ID do estabelecimento é obrigatório.' });
        }

        try {
            const produtos = await produtoService.findProdutosByEstabelecimento(Number(estabelecimentoId));
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(500).json({ message: 'Erro interno ao listar produtos.' });
        }
    }
}