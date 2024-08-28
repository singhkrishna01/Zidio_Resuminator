import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const socialValidation = (req: Request, res: Response, next: NextFunction) => {
  const base = Joi.object().keys({
    label: Joi.string().allow('').required(),
    isHidden: Joi.boolean().required(),
    link: Joi.string().allow('').required(),
    identifier: Joi.string().allow('').optional(),
  });

  const schema = Joi.object({
    contact: Joi.array().items(base),
  });

  validateRequest(req, res, next, schema);
};

export { socialValidation };
