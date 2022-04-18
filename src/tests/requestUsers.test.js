const resFunction = require('../requestResponse');

describe('response of GET Users request', () => {
  
    it('return the list of users', () => {
      expect(resFunction.responseUsers()).toBe(resFunction.users);
    });
  });
