import { Request, Response } from "express";
import usuarioService, { UsuarioSemSenha } from "../services/userService";
import { getUsuarioProfileService } from "../services/userService";
import { ZodError } from "zod";
import { createUserSchema } from "../validators/userValidator";

interface AuthRequest extends Request {
    user?: { id: number };
}

const usuarioController = {
    async createUsuario(req: Request, res: Response){
        try {
            const { body } = createUserSchema.parse(req);
            
            const novoUsuario: UsuarioSemSenha = await usuarioService.createUsuario(body);
            res.status(201).json(novoUsuario);
            
        } catch (error) {
            if (error instanceof ZodError) {
                return res.status(400).json({ 
                    message: "Erro de validação.",
                    issues: error.issues 
                });
            }
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json("Erro interno no servidor." );
        }
    }
}

export default usuarioController;

export const getUsuarioProfileController = async (req: AuthRequest, res: Response) => {
    try {
        const usuarioId = req.user?.id;

        if (!usuarioId) {
            return res.status(401).json({ message: "Usuário não autenticado" });
        }

        const usuarioProfile = await getUsuarioProfileService(usuarioId);
        res.status(200).json(usuarioProfile);
    }
    catch (error) {
        res.status(404).json({ error: (error as Error).message });
    }
};