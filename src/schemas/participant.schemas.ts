import Joi from 'joi';
import { ParticipantInput } from '../protocols';

export const participantSchema = Joi.object<ParticipantInput>({
	balance: Joi.number().min(1000).message('Valor min R$10,00').required(),
	name: Joi.string().required()
});