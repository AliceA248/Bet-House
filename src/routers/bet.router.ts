import { Router } from 'express';
import { createBet } from '../controllers';
import { validateBody } from '../middlewares';
import { betSchema } from '../schemas';

const betRouter = Router();

betRouter.post('', validateBody(betSchema), createBet);

export { betRouter };