import { Request, Response } from 'express';
import { loginService } from '../services/authService';

export const loginController = async (req: Request, res: Response) => {
    try {
        const { token } = await loginService(req.body);
        res.status(200).json({ token });
    } catch (error: any) {
        res.status(401).json({ message: error.message});
    }
};