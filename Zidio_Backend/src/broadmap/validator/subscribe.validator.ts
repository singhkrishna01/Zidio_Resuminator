import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../common/main.validator';

const subemailValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: true } })
      .required(),
  });

  validateRequest(req, res, next, schema);
};

export { subemailValidation };
