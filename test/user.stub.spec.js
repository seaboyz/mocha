const { user } = require('../src/User.js');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sync code', () => {
  it('verify the greeting message method', () => {
    const res = user.greetMessage('World');
    expect(res).to.be.equal('Hello World');
  });

  it('stub the greet method', () => {
    const greetStub = sinon.stub(user, 'greet');
    greetStub.withArgs('World').returns('Hello World');
    expect(user.greetMessage('World')).to.be.equal('Hello World');
  });
});
