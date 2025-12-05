import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

export const gerarToken = (id: number): string => {
    return jwt.sign({ id }, secret, { expiresIn: '1d' });
};