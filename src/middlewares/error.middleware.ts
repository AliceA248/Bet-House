import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Errors } from '../errosConst/erros';
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

  if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
    console.error({ message: errorMessage, status: errorStatus });
  }

  res.status(errorStatus).send({ message: errorMessage, status: errorStatus });
}
