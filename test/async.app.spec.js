const expect = require('chai').expect;
const axios = require('axios');

describe('async test suite', () => {
  it('promised based way', () => {
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
      .catch(console.log);
  });
});
