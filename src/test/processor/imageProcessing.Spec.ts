import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Resize error handller', () => {
  it('should throw an error if a parameter is missing', async () => {
    const response = await request.get('/api/resize');
    expect(response.text).toBe('Error!!,There is an input is missing!!');
  });
  it('should throw an error message if width is not a number', async () => {
    const response = await request.get(
      '/api/resize?filename=fjord&width=what&height=400'
    );
    expect(response.text).toBe('Width and height should be numbers');
  });

  it('should throw an error message if height is not a number', async () => {
    const response = await request.get(
      '/api/resize?filename=fjord&width=hello&height=what'
    );
    expect(response.text).toBe('Width and height should be numbers');
  });

  it('should return a status of 400 if an error occured', async () => {
    const response = await request.get(
      '/api/resize?filename=fjord&width=why&height=why'
    );
    expect(response.status).toEqual(400);
  });

  it('should return a message if image does not exist', async () => {
    const response = await request.get(
      '/api/resize?filename=filenotFound&width=400&height=300'
    );
    expect(response.status).toBe(404);
  });
});
