import { Router } from "express";
import usuarioController, { getUsuarioProfileController } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

console.log("--- [userRoute.ts] Arquivo de rotas de usuário foi carregado! ---");

const userRoute = Router();

/**
 * @swagger
 * tags:
 *   - name: Usuarios
 *     description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - senha
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 */

/**
 * @swagger
 * /usuarios/profile:
 *   get:
 *     summary: Retorna o perfil do usuário logado
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */

userRoute.post("/", usuarioController.createUsuario);

userRoute.get("/profile", authMiddleware, getUsuarioProfileController);

export default userRoute;
