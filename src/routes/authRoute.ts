import { Router } from 'express';
import { loginController } from '../controllers/authController';

const authRoute = Router();

authRoute.post('/login', loginController);

export default authRoute;