import prisma from '../db/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const loginService = async (credentials: any) => {
    const { email, senha} = credentials;

    const user = await prisma.usuario.findUnique({
        where: { email},
    });

    if (!user) {
        throw new Error("Usuário não encontrado");
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (!isPasswordValid) {
        throw new Error('Senha incorreta');
    }

    const jwtSecret = process.env.JWT_SECRET;

    
    if (!jwtSecret) {
        throw new Error('JWT_SECRET não está definido nas variáveis de ambiente');
    }

    const token = jwt.sign({
        usuarioId: user.id,
        email: user.email
    }, jwtSecret, { expiresIn: '8h'});

    return { token };
};