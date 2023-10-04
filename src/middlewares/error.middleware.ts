import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Errors } from '../constants';
import { ApplicationError, GenericError } from '../protocols';
import 'dotenv/config';

export function handleApplicationErrors(
  err: ApplicationError | Error | GenericError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const errorMessage = err.message || 'Internal Server Error';
  const errorStatus = Errors[err.name] || httpStatus.INTERNAL_SERVER_ERROR;

  console.error({ message: errorMessage, status: errorStatus });

  res.status(errorStatus).send({ message: errorMessage, status: errorStatus });
}
