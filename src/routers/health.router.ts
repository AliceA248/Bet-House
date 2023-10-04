import { Request, Response, Router } from 'express';
import httpStatus from 'http-status';

const healthRouter = Router();

healthRouter.get('', (_req: Request, res: Response) => {
  const message = "I'm okay!";
  const status = httpStatus.OK;
  res.status(status).send({ message, status });
});

export { healthRouter };
