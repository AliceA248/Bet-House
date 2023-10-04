import httpStatus from 'http-status';
import { ApplicationError } from '../protocols';

interface ApplicationInvalidDataError extends ApplicationError {
  details: string[];
}

export function invalidDataError(details: string[]): ApplicationInvalidDataError {
  return {
    name: 'InvalidDataError',
    message: 'Invalid data',
    status: httpStatus.UNPROCESSABLE_ENTITY,
    details: details
  };
}
