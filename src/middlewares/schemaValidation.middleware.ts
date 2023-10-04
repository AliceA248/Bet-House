import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ObjectSchema, ValidationError } from 'joi';
import { invalidDataError } from '../errors';

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, 'body');
}

function validate(schema: ObjectSchema, type: 'body' | 'params'): ValidationMiddleware {
  return (req, res, next) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      return next();
    }

    const validationErrors = error.details.map((d) => d.message);
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(invalidDataError(validationErrors));
  };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;

