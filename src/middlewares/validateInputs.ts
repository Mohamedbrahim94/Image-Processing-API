import fs from 'fs';
import { Request, Response, NextFunction } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';

//Creating images folder to upload images to its subfolder fullsize and check if present
const dir = 'images';
const subDir = 'images/fullsize';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  fs.mkdirSync(subDir);
}

//Check for image inputs
const validateInputs = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { query } = req;
  const requiredInputs = ['filename', 'width', 'height'];
  for (let i = 0; i < requiredInputs.length; i++) {
    const param = requiredInputs[i];
    if (query[param] === undefined) {
      res.send('Error!!,There is an input is missing!!');
      return;
    }

    const value = query[param];
    if (param == 'filename' && typeof value !== 'string') {
      res.send('Image name should be a string');
      return;
    }

    if (param == 'width' || param == 'height') {
      const num = Number(value);
      if (!num) {
        res.status(400).send('Width and height should be numbers');
        return;
      }
    }
  }
  next();
};

//configuring multer to upload and store images

export const storage = multer.diskStorage({
  destination: (
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void
  ): void | undefined => {
    callback(null, 'images/fullsize');
  },
  filename: (
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ): void | undefined => {
    callback(null, file.fieldname + path.extname(file.originalname));
  },
});

//to set the uploaded images formats accepted
export const imageFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(
      new Error('Only images files with the format png/jpg/jpeg are allowed !')
    );
  }
};

export default validateInputs;
