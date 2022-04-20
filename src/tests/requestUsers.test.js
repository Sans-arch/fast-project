const request = require('supertest');
const router = require('../routes');

describe('Testando app server', () => {
  it('creating user', () => {
    request(router).post('/users').send({
      name: 'Lucas',
      password: 'Jose'
    }).then(res => expect(res.body).toHaveProperty('message'));
  });
});
