import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../common/main.validator';
import { ResumeConfig } from '../../config/resume.config';

const projectValidation = (req: Request, res: Response, next: NextFunction) => {
  const base = Joi.object().keys({
    _id: Joi.string().required(),
    isHidden: Joi.boolean().required(),
    projectName: Joi.string().allow('').required(),
    additionalInfo: Joi.string().allow('').required(),
    start: [Joi.date().required(), Joi.allow(null)],
    end: [Joi.date().optional(), Joi.allow(null)],
    description: Joi.string().allow('').required(),
    link: Joi.string().uri().allow('').required(),
    tags: Joi.array().items(Joi.string()),
  });

  const schema = Joi.array().max(ResumeConfig.projectCount).items(base);

  validateRequest(req, res, next, schema);
};

export { projectValidation };
