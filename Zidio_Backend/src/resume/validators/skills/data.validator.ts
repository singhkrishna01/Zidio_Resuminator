import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../../common/main.validator';
import { ResumeConfig } from '../../../config/resume.config';

const skillDataValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const base = Joi.object().keys({
    _id: Joi.string().required(),
    isHidden: Joi.boolean().required(),
    category: Joi.string().allow('').required(),
    skillsList: Joi.array().items(Joi.string().allow(null).allow('')).required(),
  });

  const schema = Joi.object({
    data: Joi.array().max(ResumeConfig.skillCount).items(base),
  });

  validateRequest(req, res, next, schema);
};

export { skillDataValidation };
