import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Server ,Test endpoint starting failure response', () => {
  it('getting a code represents the api endpoint failure', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(404);
  });
});
