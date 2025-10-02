import { Router } from "express";
import usuarioController from "../controllers/userController";

const userRoute = Router();

userRoute.post("/usuarios", usuarioController.createUsuario);

export default userRoute;