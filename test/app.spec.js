const { expect } = require('chai');
const { add, sub } = require('../src/app.js');

describe('suite 1', () => {
  it('add(2,3) should return 5', () => {
    expect(add(2, 3)).to.equal(5);
  });
});

const { suite, test } = require('mocha');

suite('suite 1', () => {
  test('add(3,3) should return 5', () => {
    expect(add(3, 3)).to.equal(6);
  });
});