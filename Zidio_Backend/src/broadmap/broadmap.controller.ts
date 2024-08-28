import { Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';
import FormData from 'form-data';
import { BroadmapConfig } from '../config/broadmap.config';

const subBroadmap = (req: Request, res: Response) => {
  const data = new FormData();
  data.append('email', req.body.email);
  const config: AxiosRequestConfig = {
    method: 'post',
    url: 'https://www.getrevue.co/api/v2/subscribers',
    headers: {
      Authorization: `Token ${BroadmapConfig.api}`,
      ...data.getHeaders(),
    },
    data: data,
  };
  axios(config)
    .then(() => {
      res.status(200).json({
        message: 'Check Your Email for more details.',
      });
    })
    .catch(() => {
      res.status(400).json({
        message: 'Confirm Email from last email we sent you',
      });
    });
};

export { subBroadmap };
