import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const templatefontValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    fontProfile: Joi.string().required(),
  });

  validateRequest(req, res, next, schema);
};

export { templatefontValidation };
