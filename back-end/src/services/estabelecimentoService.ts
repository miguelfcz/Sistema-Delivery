import prisma from '../db/prisma';
import { Estabelecimento } from '../../generated/prisma';

type EstabelecimentoCreateData = Omit<Estabelecimento, 'id' | 'createdAt' | 'updatedAt'>;
type EstabelecimentoUpdateData = Partial<Pick<Estabelecimento, 'nome' | 'endereco'>>;

export class EstabelecimentoService {
    async create(data: EstabelecimentoCreateData): Promise<Estabelecimento> {
        return prisma.estabelecimento.create({
            data,
        });
    }

    async update(id: number, data: EstabelecimentoUpdateData, usuarioDonoId: number): Promise<Estabelecimento> {
        const estabelecimento = await prisma.estabelecimento.findUnique({
            where: { id },
        });

        if (!estabelecimento) {
            throw new Error('Estabelecimento não encontrado.');
        }

        if (estabelecimento.usuarioId !== usuarioDonoId) {
            throw new Error('Permissão negada. Você não é o dono deste estabelecimento.');
        }

        return prisma.estabelecimento.update({
            where: { id },
            data,
        });
    }

    //Em vez de deletar, apenas desativa o estabelecimento
    async deactivate(id: number, usuarioDonoId: number): Promise<Estabelecimento> {
        const estabelecimento = await prisma.estabelecimento.findUnique({
            where: { id },
        });

        if (!estabelecimento) {
            throw new Error('Estabelecimento não encontrado.');
        }

        if (estabelecimento.usuarioId !== usuarioDonoId) {
            throw new Error('Permissão negada. Apenas o dono pode desativar este estabelecimento.');
        }

        return prisma.estabelecimento.update({
            where: { id },
            data: { ativo: false },
        });
    }
    async findById(id: number): Promise<Estabelecimento | null> {
        return prisma.estabelecimento.findUnique({
            where: { id },
            include: { produtos: true },
        });
    }

    async findAll(): Promise<Estabelecimento[]> {
        return prisma.estabelecimento.findMany({
            where: { ativo: true }
        });
    }
}