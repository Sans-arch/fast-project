const resFunction = require('../requestResponse');

describe('response of GET requests', () => {
  
  it('return a success message', () => {
    expect(resFunction()).toBe("OK, request received with sucess");
  });
});
