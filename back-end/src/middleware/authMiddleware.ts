import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
    user?: { id: number};
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json ('Token não fornecido');
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return res.status(401).json('Token inválido');
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json('Token mal formatado');
    }

    const jwtSecret = process.env.JWT_SECRET;

    
    if (!jwtSecret) {
        return res.status(500).json('JWT_SECRET não está definido nas variáveis de ambiente');
    }

    jwt.verify(token, jwtSecret, (err, decoded: any) => {
        if (err) {
            return res.status(401).json('Token inválido ou expirado');
        }

        req.user = { id: decoded.usuarioId };

        return next();
    });
};