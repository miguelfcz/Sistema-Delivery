import { Request, Response } from "express";
import  usuarioService, { UsuarioSemSenha } from "../services/userService";
import { getUsuarioProfileService } from "../services/userService";

interface AuthRequest extends Request {
    user?: { id: number };
}

const usuarioController = {
    async createUsuario(req: Request, res: Response){
        try {
            const { nome, email, senha} = req.body;
            const novoUsuario: UsuarioSemSenha = await usuarioService.createUsuario({nome, email, senha});
            res.status(201).json(novoUsuario);
        } catch (error) {
            res.status(400).json({error: (error as Error).message});
        }
    }
}

export default usuarioController;

export const getUsuarioProfileController = async (req: AuthRequest, res: Response) => {
    try {
        const usuarioId = req.user?.id;

        if (!usuarioId) {
            return res.status(401).json("Usuário não autenticado");
        }

        const usuarioProfile = await getUsuarioProfileService(usuarioId);
        res.status(200).json(usuarioProfile);
    }
    catch (error) {
        res.status(404).json({ error: (error as Error).message });
    }
};