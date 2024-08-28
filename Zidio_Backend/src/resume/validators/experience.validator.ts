import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../common/main.validator';
import { ResumeConfig } from '../../config/resume.config';

const experienceValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const base = Joi.object().keys({
    _id: Joi.string().required(),
    isHidden: Joi.boolean().required(),
    jobTitle: Joi.string().allow('').required(),
    company: Joi.string().allow('').required(),
    location: Joi.string().allow('').required(),
    description: Joi.string().allow('').required(),
    link: Joi.string().uri().allow('').required(),
    tags: Joi.array().items(Joi.string()),
    start: Joi.date().required(),
    end: [Joi.date().optional(), Joi.allow(null)],
  });

  const schema = Joi.array().max(ResumeConfig.experienceCount).items(base);

  validateRequest(req, res, next, schema);
};

export { experienceValidation };
