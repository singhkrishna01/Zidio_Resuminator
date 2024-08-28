import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../common/main.validator';
import { ResumeConfig } from '../../config/resume.config';

const customSectionValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const inputs = Joi.object().keys({
    _id: Joi.string().required(),
    type: Joi.string().allow('').required(),
    name: Joi.string().allow('').required(),
  });

  const data = Joi.object().keys({
    _id: Joi.string().required(),
    isHidden: Joi.boolean().required(),
    values: Joi.object().required(),
  });

  const base = Joi.object().keys({
    _id: Joi.string().required(),
    header: Joi.string().allow('').required(),
    hasTitleRow: Joi.boolean().required(),
    inputs: Joi.array().items(inputs).required(),
    data: Joi.array().items(data).required(),
    layout: Joi.array().items(Joi.array().items(Joi.string())).required(),
  });

  const schema = Joi.array()
    .max(ResumeConfig.customSectionCount)
    .items(base)
    .required();

  validateRequest(req, res, next, schema);
};

export { customSectionValidation };
