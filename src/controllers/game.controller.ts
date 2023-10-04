import { Request, Response } from 'express';
import { GameInput, GameUpdate } from '../protocols';
import httpStatus from 'http-status';
import { gameServices } from '../services';

export async function createGame(req: Request, res: Response) {
  try {
    const body = req.body as GameInput;
    const game = await gameServices.create(body);
    res.status(httpStatus.CREATED).send(game);
  } catch (error) {
    console.error("Erro ao criar jogo:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno ao criar jogo.");
  }
}

export async function updateGame(req: Request, res: Response) {
  try {
    const body = req.body as GameUpdate;
    const id = Number(req.params.id);
    const game = await gameServices.update(id, body);
    res.status(httpStatus.OK).send(game);
  } catch (error) {
    console.error("Erro ao atualizar jogo:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno ao atualizar jogo.");
  }
}

export async function findManyGames(req: Request, res: Response) {
  try {
    const games = await gameServices.findMany();
    res.status(httpStatus.OK).send(games);
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno ao buscar jogos.");
  }
}

export async function findOneGame(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { Bet: bets, ...rest } = await gameServices.findOne(id);
    res.status(httpStatus.OK).send({ ...rest, bets });
  } catch (error) {
    console.error("Erro ao buscar jogo:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno ao buscar jogo.");
  }
}
