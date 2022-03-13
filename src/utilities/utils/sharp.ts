import sharp, { Sharp } from 'sharp';
//using sharp to resize images
const sharpResizing = async (
  fileName: string | null,
  width: number | null,
  height: number | null
): Promise<Sharp> => {
  const buffer = `images/fullsize/${fileName}.jpg`;
  const image = await sharp(buffer);
  const resizedimage = image.resize(width, height);
  //.toFile('/public/resized');
  return resizedimage;
};

//using sharp to rotate images
export const sharpRotating = async (fileName: string): Promise<Sharp> => {
  const buffer = `images/fullsize/${fileName}.jpg`;
  const image = await sharp(buffer);
  const rotatedimage = image.rotate(135);
  //.tofile('/public/rotated')
  return rotatedimage;
};

export default sharpResizing;
