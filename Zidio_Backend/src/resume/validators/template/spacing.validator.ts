import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const templateSpacingValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    spacing: Joi.number().max(5).required(),
  });

  validateRequest(req, res, next, schema);
};

export { templateSpacingValidation };
