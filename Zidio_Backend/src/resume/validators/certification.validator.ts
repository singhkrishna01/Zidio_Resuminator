import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../common/main.validator';
import { ResumeConfig } from '../../config/resume.config';

const certificateValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const base = Joi.object().keys({
    _id: Joi.string().required(),
    isHidden: Joi.boolean().required(),
    certificateName: Joi.string().allow('').required(),
    authority: Joi.string().allow('').required(),
    credentialNumber: Joi.string().allow('').required(),
    start: Joi.date().required(),
    end: [Joi.date().optional(), Joi.allow(null)],
    link: Joi.string().uri().allow('').required(),
  });

  const schema = Joi.array().max(ResumeConfig.certificationCount).items(base);

  validateRequest(req, res, next, schema);
};

export { certificateValidation };
