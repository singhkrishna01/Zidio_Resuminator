import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../common/main.validator';
import { ResumeConfig } from '../../config/resume.config';

const publicationValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const base = Joi.object().keys({
    _id: Joi.string().required(),
    isHidden: Joi.boolean().required(),
    authorNames: Joi.string().allow('').required(),
    journalName: Joi.string().allow('').required(),
    articleTitle: Joi.string().allow('').required(),
    volumeNumber: Joi.string().allow('').required(),
    issueNumber: Joi.string().allow('').required(),
    pages: Joi.string().allow('').required(),
    year: Joi.number().allow('').required(),
    format: Joi.string().valid('MLA', 'APA').required(),
    doi: Joi.string().allow('').required(),
  });

  const schema = Joi.array().max(ResumeConfig.publicationCount).items(base);

  validateRequest(req, res, next, schema);
};

export { publicationValidation };
