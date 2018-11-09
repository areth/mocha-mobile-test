const assert = require('assert');

describe('basic', () => {
  it('2 + 2 = 4', () => {
    const sum = 2 + 2;
    assert.equal(sum, 4);
  });

  it('2 + 2 = 5', () => {
    const sum = 2 + 2;
    assert.equal(sum, 5);
  });
});
