//testing resizing by passing query parameters of a random image
//been already tested on POSTMAN

import { imageExist, sharpRotating } from '../../utilities/utils';

describe('Sharp process', () => {
  it('should resize an image provided', async () => {
    const filename = 'santamonica';
    const width = 400;
    const height = 700;
    const imagelocation = `./src/test/testedImage/${filename}-${width}x${height}.jpg`;
    const res = await sharpRotating(filename);
    await res.toFile(imagelocation, async () => {
      const approved = await imageExist(imagelocation);
      expect(approved).toBe(true);
    });
  });
});
