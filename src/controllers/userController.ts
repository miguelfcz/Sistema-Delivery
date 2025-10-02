import { Request, Response } from "express";
import  usuarioService, { UsuarioSemSenha } from "../services/userService";

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