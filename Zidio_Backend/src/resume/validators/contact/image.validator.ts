import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const imageValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    userImage: Joi.string().allow('').uri().required(),
  });

  validateRequest(req, res, next, schema);
};

export { imageValidation };
