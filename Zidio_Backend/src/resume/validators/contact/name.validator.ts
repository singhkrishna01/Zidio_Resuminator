import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    fullName: Joi.string().allow('').required(),
  });

  validateRequest(req, res, next, schema);
};

export { nameValidation };
