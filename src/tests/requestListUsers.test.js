const request = require('supertest');
const app = require('../../index');

describe('Testando app server', () => {
  it('return the list of users', () => {
    request(app).get('/users').then(res => expect(res.status).toEqual(200))
  });
});
