const { user } = require('../src/User.js');
const { expect } = require('chai');
const sinon = require('sinon');
const { default: axios } = require('axios');

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

describe('async code', () => {
  it('check the user data', async () => {
    const result = await axios.get('https://reqres.in/api/users/2');
    const data = result.data.data;
    expect(data.id).to.be.equal(2);
    expect(data.email).to.be.equal('janet.weaver@reqres.in');
    expect(data.first_name).to.be.equal('Janet');
  });
});

describe.only('get UserDataById - stub async method', () => {
  let stub;
  beforeEach(() => {
    stub = sinon.stub(user, 'getUserDataById');
  });
  it('stub getUserUserDataById', async () => {
    const output = {
      id: 2,
      email: 'test@test.com',
      first_name: 'john',
    };

    stub.withArgs(2).returns(Promise.resolve(output));

    const data = await user.getUserDataById(2);
    expect(data.id).to.be.equal(output.id);
    expect(data.email).to.be.equal(output.email);
    expect(data.first_name).to.be.equal(output.first_name);
  });
});
