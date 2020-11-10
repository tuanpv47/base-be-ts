import { NODE_ENV } from 'config/config';
import { DEVELOPMENT, HttpCode, PRODUCT } from 'constant/constant';
import { NextFunction, Request, Response } from 'express';

const sendErrorDev = (err: Error, res: Response) => {
  return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    name: err.name,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err: Error, res: Response) => {
  return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    message: err.message
  });
};

export const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (NODE_ENV === PRODUCT) {
    sendErrorProd(err, res);
  } else if (NODE_ENV === DEVELOPMENT) {
    sendErrorDev(err, res);
  }
};

export const RouteWrapperHOC = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: Error) => next(err));
  };
};
