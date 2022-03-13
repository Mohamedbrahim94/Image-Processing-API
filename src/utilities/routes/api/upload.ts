import express, { Request, Response } from 'express';
import fs from 'fs';
import { logger } from '../../../middlewares';
import multer from 'multer';
import imageSize from 'image-size';
import { directory, subDirectory } from '../../../constants/directories';
import { resizeImg } from '../../../processer/imageProcessing';
import { imageFilter, storage } from '../../../middlewares/validateInputs';

///Here you have to check for a complete application and using sharp in it to resize image with different formats

//used multer middleware library to upload images

const upload = express.Router();
upload.use(logger);

// sending html file as a server response
upload.get('/upload', (req: Request, res: Response): void => {
  res.sendFile(__dirname + '/views/uploadPage.html');
});

//checking if there is no public folder file system will create it
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
  fs.mkdirSync(subDirectory);
}

upload.use(express.static('images')); // change storage >> to public folder

const uploadedImage = multer({ storage: storage, fileFilter: imageFilter });

//uploading images using posting method ,, adding the uploadedImage as a middleware to the POST request
upload.post(
  '/upload',
  uploadedImage.single('file'),
  async (req: Request, res: Response): Promise<void> => {
    const width = req.body.width;
    const height = req.body.height;
    if (req.file) {
      console.log(req.file?.path);
      if (isNaN(width) || isNaN(height)) {
        const imageDimensions = imageSize(req.file.path);
        console.log(imageDimensions);
        const width = imageDimensions.width as unknown as number;
        const height = imageDimensions.height as unknown as number;
        resizeImg(width, height, res, req);
      } else {
        resizeImg(width, height, res, req);
      }
    }
  }
);

export default upload;
