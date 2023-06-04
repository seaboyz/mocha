const expect = require('chai').expect;
const axios = require('axios');
const { retries } = require('mocha');

describe('async test suite', () => {
  it('promised based way', function () {
    this.timeout(1000);
    return axios
      .get('https://reqres.in/api/users/2')
      .then(res =>
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
      );
  });

  it('done based way', done => {
    axios
      .get('https://reqres.in/api/users/2')
      .then(res => {
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
        done();
      })
      .catch(done);
  });

  it('await based way', async () => {
    const res = await axios.get('https://reqres.in/api/users/2');
    expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
  });
});
