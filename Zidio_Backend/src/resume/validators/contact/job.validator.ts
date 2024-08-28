import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const jobTitleValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    jobTitle: Joi.string().allow('').required(),
  });

  validateRequest(req, res, next, schema);
};

export { jobTitleValidation };
