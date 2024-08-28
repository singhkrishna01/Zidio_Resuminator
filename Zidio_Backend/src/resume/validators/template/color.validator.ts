import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const templateColorValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    color: Joi.string().required(),
  });

  validateRequest(req, res, next, schema);
};

export { templateColorValidation };
