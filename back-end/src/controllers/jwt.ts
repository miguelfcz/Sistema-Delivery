import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

if (!secret) {
    throw new Error('JWT_SECRET is not defined in your .env file');
}

export const gerarToken = (id: number): string => {
    return jwt.sign({ id }, secret, { expiresIn: '1d' });
};
