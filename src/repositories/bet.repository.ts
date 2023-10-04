import { PrismaClient } from '@prisma/client';
import { BetInput, BetResult } from '../protocols';
import { prisma } from '../config';


async function create(data: BetInput) {
  const transaction = [
    prisma.bet.create({ data }),
    prisma.participant.update({
      where: { id: data.participantId },
      data: { balance: { decrement: data.amountBet } },
    }),
  ];

  return prisma.$transaction(transaction);
}



async function update(id: number, result: BetResult, prismaTransaction: PrismaClient) {
  return prismaTransaction.bet.update({
    where: { id },
    data: { ...result },
  });
}

export const betRepository = {
  create,
  update,
};
