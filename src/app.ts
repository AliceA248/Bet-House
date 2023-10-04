import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { betRouter, gameRouter, healthRouter, participantRouter } from './routers';
import { handleApplicationErrors } from './middlewares';
import { loadEnv, connectDb, disconnectDB } from './config';


loadEnv();

const app = express();


app.use(cors())
app.use(express.json())
app.use('/health', healthRouter)
app.use('/participants', participantRouter)
app.use('/games', gameRouter)
app.use('/bets', betRouter)
app.use(handleApplicationErrors)
;


export function init(): Promise<Express> {
	connectDb();
	return Promise.resolve(app);
}

export async function close(): Promise<void> {
	await disconnectDB();
}

export default app;