const request = require('supertest');
const routes = require('../routes')

describe('Testando app server', () => {
  it('return the list of users', () => {
    request(routes).get('/users').then(res => expect(res.status).toEqual(200))
  });
});
