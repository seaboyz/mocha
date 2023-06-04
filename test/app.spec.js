const { expect } = require('chai');
const { add, sub } = require('../src/app.js');

describe('suite 1', () => {
  afterEach(() => {
    console.log('after each');
  });
  beforeEach(() => {
    console.log('before each');
  });
  after(() => {
    console.log('after');
  });
  before(() => {
    console.log('before');
  });
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
