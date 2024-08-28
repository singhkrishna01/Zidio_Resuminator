import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../common/main.validator';

const metaValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    profileName: Joi.string(),
    icon: Joi.string(),
    color: Joi.string(),
  }).required();

  validateRequest(req, res, next, schema);
};

export { metaValidation };
