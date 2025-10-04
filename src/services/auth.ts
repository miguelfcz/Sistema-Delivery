import { Usuario } from "../../generated/prisma";

export type LoginCredentials = Pick<Usuario, "email" | "senha">;

export type UsuarioSemSenha = Omit<Usuario, "senha">;
