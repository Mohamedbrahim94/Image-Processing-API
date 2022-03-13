import express from 'express';
import upload from './api/upload';
import { resizeImage } from '../../processer';
import { validateInputs } from '../../middlewares';
import { rotateImage } from '../../processer/imageProcessing';
import gallery from './api/imageGallery';

const routes = express.Router();

routes.get('/api/resize', validateInputs, resizeImage);

routes.get('/api/rotate', rotateImage);

routes.use('/api/', upload);

routes.use('/api', gallery);

export default routes;
