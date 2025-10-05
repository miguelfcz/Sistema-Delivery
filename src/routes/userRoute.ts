import { Router } from "express";
import usuarioController, {getUsuarioProfileController} from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const userRoute = Router();

userRoute.post("/usuarios", usuarioController.createUsuario);

userRoute.get("/usuarios/profile", authMiddleware, getUsuarioProfileController);

export default userRoute;