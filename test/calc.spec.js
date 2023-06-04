const { myCalc } = require('../src/Calculator.js');
const expect = require('chai').expect;

describe('Basic Test', () => {
  it.only('sum - should return correct output with positive values', () => {
    const result = myCalc.sum(2, 3);
    expect(result).to.equal(5);
  });
});
