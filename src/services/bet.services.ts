import { participantServices } from './participant.services';
import { gameServices } from './game.services';
import { errorHandler } from '../errors';
import { BetInput } from '../protocols';
import { betRepository } from '../repositories';

async function create(body: BetInput) {
  const { participantId, gameId, amountBet } = body;

  const [participant, game] = await Promise.all([
    participantServices.findOne(participantId),
    gameServices.findOne(gameId),
  ]);

  if (game.isFinished) {
    throw errorHandler({
      message: 'Não é possível fazer a aposta, pois este jogo já foi finalizado.',
      name: 'BadRequestError'
    });
  }

  if (amountBet > participant.balance) {
    throw errorHandler({
      message: 'Você não possui saldo suficiente para realizar esta aposta. Por favor, tente com um valor menor.',
      name: 'BadRequestError'
    });
  }

  return betRepository.create(body);
}

export const betServices = {
  create
};
