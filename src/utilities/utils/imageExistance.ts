import fs from 'fs';

const imageExist = async (imageLocation: string): Promise<boolean> => {
  const res = await fs.existsSync(imageLocation);

  return res;
};

export default imageExist;
