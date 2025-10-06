import { Router } from "express";
import usuarioController, { getUsuarioProfileController } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

console.log("--- [userRoute.ts] Arquivo de rotas de usuário foi carregado! ---");

const userRoute = Router();

userRoute.post("/", usuarioController.createUsuario);

userRoute.get("/profile", authMiddleware, getUsuarioProfileController);

export default userRoute;