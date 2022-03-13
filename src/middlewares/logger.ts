import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log('Logger is successfully working !!');
  next();
};

export default logger;
