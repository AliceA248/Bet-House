import { Request, Response } from 'express';
import { participantServices } from '../services';
import { ParticipantInput } from '../protocols';
import httpStatus from 'http-status';

export async function createParticipant(req: Request, res: Response) {
  try {
    const body = req.body as ParticipantInput;
    const participant = await participantServices.create(body);
    res.status(httpStatus.CREATED).send(participant);
  } catch (error) {
    console.error("Erro ao criar participante:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno ao criar participante.");
  }
}

export async function findManyParticipants(_req: Request, res: Response) {
  try {
    const participants = await participantServices.findMany();
    res.status(httpStatus.OK).send(participants);
  } catch (error) {
    console.error("Erro ao buscar participantes:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno ao buscar participantes.");
  }
}
