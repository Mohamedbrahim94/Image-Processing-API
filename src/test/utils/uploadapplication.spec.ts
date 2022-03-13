import upload from '../../utilities/routes/api/upload';
import supertest from 'supertest';

const request = supertest(upload);

describe('Server ,Test endpoint response', () => {
  it('get the api endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
