const { expect, assert, should } = require('chai');

describe('Chai assertions', () => {
  const a = 20;
  const arr = [30, 40, 50];
  const myfunc = (a, b) => a + b;
  const isTrue = true;
  const nan = NaN;
  const myUndefined = undefined;

  it('should style', () => {
    expect(a).to.equal(20);
    expect(arr).to.be.an('array');
    expect(arr).to.include(50);
    expect(arr).to.deep.equal([30, 40, 50]);
    expect(arr).to.have.length(3);
    expect(myfunc(1, 2)).to.equal(3);
  });
});
