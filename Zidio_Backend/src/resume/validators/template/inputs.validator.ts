import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const templateInputValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    inputs: Joi.array().items(Joi.string()).required(),
  });

  validateRequest(req, res, next, schema);
};

export { templateInputValidation };
