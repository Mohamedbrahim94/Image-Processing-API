import { sharpResizing, sharpRotating } from '../../utilities/utils';

// testing imageExist function sending query parameters of an image

describe('Sharp error handler', () => {
  it('should throw an error if the image to be resized doesnot exist in the target folder', async () => {
    const fileName = 'fjord';

    const width = 550;

    const height = 650;

    const resizedImageLocation = `./public/${fileName}-${width}x${height}`;

    const res = await sharpResizing(fileName, width, height);

    res.toFile(resizedImageLocation, (error: Error) => {
      expect(status).toBe('200');

      expect(error.message).toEqual('Failed!! cannot find image location');
    });
  });

  it('should throw an error if the image to be rotated is not found', async () => {
    const fileName = 'palmtunnel';

    const width = 200;

    const height = 200;

    const rotatedImageLocation = `./public/${fileName}_${width}_${height}`;

    const res = await sharpRotating(fileName);

    res.toFile(rotatedImageLocation, (error: Error) => {
      expect(status).toBe('200');

      expect(error.message).toEqual('Failed!! cannot find image location');
    });
  });
});
