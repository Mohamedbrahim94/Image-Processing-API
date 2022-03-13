import express, { Request, Response } from 'express';
import { logger } from '../../../middlewares';
import path from 'path';

const gallery = express.Router();

gallery.use(express.static(path.join(__dirname + 'public')));

gallery.use(logger);

gallery.get('/gallery', async (req: Request, res: Response): Promise<void> => {
  res.sendFile(__dirname + '/views/gallery.html');
});

export default gallery;
