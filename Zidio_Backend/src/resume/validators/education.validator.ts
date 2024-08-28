import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../common/main.validator';
import { ResumeConfig } from '../../config/resume.config';

const educationValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const base = Joi.object().keys({
    _id: Joi.string().required(),
    isHidden: Joi.boolean().required(),
    institute: Joi.string().allow('').required(),
    location: Joi.string().allow('').required(),
    degree: Joi.string().allow('').required(),
    stream: Joi.string().allow('').required(),
    gradeObtained: Joi.number().required(),
    gradeMax: Joi.number().required(),
    start: Joi.date().required(),
    end: [Joi.date().optional(), Joi.allow(null)],
    description: Joi.string().allow('').required(),
  });

  const schema = Joi.array().max(ResumeConfig.educationCount).items(base);

  validateRequest(req, res, next, schema);
};

export { educationValidation };
