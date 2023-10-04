import {  Router } from 'express';
import { createParticipant, findManyParticipants } from '../controllers';
import { participantSchema } from '../schemas';
import { validateBody } from '../middlewares';

const participantRouter = Router();

participantRouter.get('', findManyParticipants);
participantRouter.post('', validateBody(participantSchema), createParticipant );


export { participantRouter };