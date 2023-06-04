const sinon = require('sinon');
const { myCalc } = require('../src/Calculator.js');
const expect = require('chai').expect;

describe('Basic Test', () => {
  let sumSpy;

  beforeEach(() => {
    sumSpy = sinon.spy(myCalc, 'sum');
  });

  afterEach(() => {
    sumSpy.restore();
  });
  it('spy add method', () => {
    // act
    myCalc.sum(10, 20);
    // assert
    expect(sumSpy.calledOnce).to.be.true;
    expect(sumSpy.calledOnceWithExactly(10, 20)).to.be.true;
  });
});
