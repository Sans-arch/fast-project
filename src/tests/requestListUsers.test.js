const request = require('supertest');
const app = require('../../index');

describe('Testando app server', () => {
  it('return the list of users', async () => {
    const res = await request(app).get('/users');

    expect(res.body).toEqual(200);
  });
});
