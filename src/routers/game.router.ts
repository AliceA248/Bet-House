import { Router } from 'express';
import { createGame, findManyGames, findOneGame, updateGame } from '../controllers';
import { gameSchema, updateGameSchema } from '../schemas';
import { validateBody } from '../middlewares';

const gameRouter = Router();

gameRouter.post('', validateBody(gameSchema), createGame );
gameRouter.post('/:id/finish', validateBody(updateGameSchema), updateGame );
gameRouter.get('', findManyGames);
gameRouter.get('/:id', findOneGame);

export { gameRouter };