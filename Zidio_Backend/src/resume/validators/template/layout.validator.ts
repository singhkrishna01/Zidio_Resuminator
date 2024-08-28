import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';

const templateLayoutValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const layout = Joi.object().keys({
    header: Joi.array()
      .items(
        Joi.array().items(
          Joi.string().valid('USER_IMAGE', 'SOCIAL_HANDLES', 'NAME_AND_JT'),
        ),
      )
      .required(),
    body: Joi.array().items(Joi.array().items(Joi.string())).required(),
    footer: Joi.array().items(Joi.string()).required(),
  });

  const schema = Joi.object({
    layout: layout.required(),
  });

  validateRequest(req, res, next, schema);
};

export { templateLayoutValidation };
