import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const skillCategoryValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    format: Joi.string().valid('CATEGORIES', 'TAGS').required(),
  });

  validateRequest(req, res, next, schema);
};

export { skillCategoryValidation };
