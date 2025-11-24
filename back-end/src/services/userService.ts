import prisma from "../db/prisma";
import { Usuario } from "../../generated/prisma";
import bcrypt from "bcryptjs";

export type UsuarioSemSenha = Omit<Usuario, "senha">; //Não retornar a senha

const usuarioService = {
    async createUsuario(data: {nome: string, email: string, senha: string}): Promise<UsuarioSemSenha> {
      const emailExists = await prisma.usuario.findUnique({
        where: {email: data.email}
      });

      if (emailExists) {
        throw new Error("Email já cadastrado.");
      };

      const hashedPassword = await bcrypt.hash(data.senha, 10);

      const novoUsuario = await prisma.usuario.create({
        data: {
            nome: data.nome,
            email: data.email,
            senha: hashedPassword,
        },
      });

      const { senha, ...usuarioSemSenha} = novoUsuario;
      return usuarioSemSenha;
    }
};
    
export default usuarioService;

export const getUsuarioProfileService = async (usuarioId: number) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id: usuarioId },
    select: {
      id: true,
      nome: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    }
  });

  if (!usuario) {
    throw new Error("Usuário não encontrado.");
  }

  return usuario;
}