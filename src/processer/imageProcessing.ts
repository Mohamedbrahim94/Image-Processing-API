import { Response, Request } from 'express';
import path from 'path';
import sharpResizing, { sharpRotating } from '../utilities/utils/sharp';
import imageExist from '../utilities/utils/imageExistance';
import sharp from 'sharp';
import fs from 'fs';

// Resizing Images process
const resizeImage = async (req: Request, res: Response): Promise<void> => {
  const { filename, width, height } = req.query;

  const imageFilename: string = filename as unknown as string;
  // here using a radix refering to value of number system which i used 10 which refers to decimal i can omiit it as default value is 10:
  const imageWidth: number | null = width
    ? parseInt(width as string, 10)
    : null;
  const imageHeight: number | null = height
    ? parseInt(height as string, 10)
    : null;

  try {
    const imageLocation = `${imageFilename}-${imageWidth}x${imageHeight}.jpg`;
    const resizeLocation = `./public/${imageFilename}-${imageWidth}x${imageHeight}.jpg`;
    const imageLocationExists = await imageExist(
      path.join('public', imageLocation)
    );

    // check if the resized image is cached
    if (imageLocationExists) {
      res.sendFile(`/${imageLocation}`, { root: path.join('./public') });
    } else {
      const respond = await sharpResizing(
        imageFilename,
        imageWidth,
        imageHeight
      );
      respond.toFile(resizeLocation, (error: Error) => {
        if (error) {
          res.status(404).send(' Failed !! cannott find image location');
        } else {
          res.sendFile(`/${imageLocation}`, { root: path.join('./public') });
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
};

//Rotating image process with 135 degree ..
export const rotateImage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { filename } = req.query;
  const imageFilename: string = filename as unknown as string;

  try {
    const imageLocation = `${imageFilename}.jpg`;
    const rotateLocation = `./public/${imageFilename}.jpg`;
    const imageLocationExists = await imageExist(
      path.join('public', imageLocation)
    );

    // check if the  rotated imaged is cached
    if (imageLocationExists) {
      res.sendFile(`/${imageLocation}`, { root: path.join('./public') });
    } else {
      const respond = await sharpRotating(imageFilename);
      respond.toFile(rotateLocation, (error: Error) => {
        if (error) {
          res.status(403).send(' Failed !! cannot find image location');
        } else {
          res.sendFile(`/${imageLocation}`, { root: path.join('./public') });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//resize image for upload Application

export const resizeImg = (
  width: number,
  height: number,
  res: Response,
  req: Request
): void => {
  const format = req.body.format;
  const outputFilePath = `${req.file?.filename}_${width}x${height}.${format}`;
  if (req.file) {
    sharp(req.file?.path)
      .resize(width, height)
      .toFile(outputFilePath, (error) => {
        if (error) throw error;
        res.download(outputFilePath, (error) => {
          if (error) throw error;
          fs.readdirSync('/upload');
          // to delete the stored images
          fs.unlinkSync(outputFilePath);
        });
      });
  }
};

export default resizeImage;
