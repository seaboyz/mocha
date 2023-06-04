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
      .catch(done);
  });

  it('await based way', async () => {
    const res = await axios.get('https://reqres.in/api/users/2');
    expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
  });
});
