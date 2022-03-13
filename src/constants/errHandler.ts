import { Request, Response } from 'express';

const error = (req: Request, res: Response): void => {
  const errorMessage = 'Error !! ';
  res.send(errorMessage);
};

export default error;
