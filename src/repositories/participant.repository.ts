import { PrismaClient } from '@prisma/client';
import { prisma } from '../config';
import { ParticipantInput } from '../protocols';

function create(data: ParticipantInput) {
  return prisma.participant.create({ data });
}

function findMany() {
  return prisma.participant.findMany();
}

function findOne(id: number) {
  return prisma.participant.findUnique({ where: { id } });
}

function update(id: number, increment: number, prismaTransaction: PrismaClient) {
  return prismaTransaction.participant.update({
    where: { id },
    data: {
      balance: {
        increment,
      },
    },
  });
}

export const participantRepository = {
  create,
  findMany,
  findOne,
  update,
};
