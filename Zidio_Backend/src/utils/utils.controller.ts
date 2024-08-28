import { Request, Response } from 'express';

const getHome = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to Resuminator Backend',
    version: '0.2.0',
    license: 'GPLv3',
  });
};

export { getHome };
