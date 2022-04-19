const request = require('supertest');
const app = require('../../index');

describe('Testando app server', () => {
  it('creating user', async () => {
    const res = await request(app)
    .post('/users')
    .send({
      name: 'Lucas',
      password: 'Jose'
    });

    expect(res.body).toHaveProperty('message');
  });
});
