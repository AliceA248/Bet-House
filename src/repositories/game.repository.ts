import { prisma } from '../config';
import { amountWonCalculator, betsResultsCalculator } from '../helpers';
import { GameInput, GameUpdate } from '../protocols';
import { betRepository } from './bet.repository';
import { participantRepository } from './participant.repository';

function create(data: GameInput) {
  return prisma.game.create({ data });
}

async function update(id: number, data: GameUpdate) {
  return await prisma.$transaction(async () => {
    const [game, bets] = await Promise.all([
      prisma.game.update({ where: { id }, data: { ...data, isFinished: true } }),
      prisma.bet.findMany({ where: { gameId: id } }),
    ]);

    const { allBets, allWinnerBets } = betsResultsCalculator(bets, data);

    const updates = bets.map(async (bet) => {
      const won = data.awayTeamScore === bet.awayTeamScore && data.homeTeamScore === bet.homeTeamScore;
      const amountWon = won ? amountWonCalculator(bet.amountBet, allWinnerBets, allBets) : 0;
      const status = won ? 'WON' : 'LOST';

      await Promise.all([
        betRepository.update(bet.id, { status, amountWon }, prisma),
        participantRepository.update(bet.participantId, amountWon, prisma),
      ]);
    });

    await Promise.all(updates);

    return game;
  });
}

function findMany() {
  return prisma.game.findMany();
}

function findOne(id: number) {
  return prisma.game.findUnique({
    where: { id },
    include: {
      Bet: true,
    },
  });
}

export const gameRepository = {
  create,
  update,
  findMany,
  findOne,
};
