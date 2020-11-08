import { NextFunction, Request, Response } from 'express';

export const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    message: err.message
  });
};

export const RouteWrapperHOC = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: Error) => next(err));
  };
};
