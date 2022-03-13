import { imageExist, sharpResizing } from '../../utilities/utils';

//testing resizing by passing query parameters of a random image
//been already tested on POSTMAN

describe('Sharp process', () => {
  it('should resize an image provided', async () => {
    const filename = 'santamonica';
    const width = 400;
    const height = 700;
    const imagelocation = `./src/test/testedImage/${filename}-${width}x${height}.jpg`;
    const res = await sharpResizing(filename, width, height);
    await res.toFile(imagelocation, async () => {
      const approved = await imageExist(imagelocation);
      expect(approved).toBe(true);
    });
  });
});
