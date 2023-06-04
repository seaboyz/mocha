const axios = require('axios');

class User {
  greet(noun) {
    return `Hello ${noun}`;
  }

  greetMessage(who) {
    return this.greet(who);
  }

  async getUserDataById(id) {
    const result = await axios({
      method: 'GET',
      url: `https:/reqres.in/api/users/${id}`,
    });
    return result.data.data;
  }
}

const user = new User();

module.exports = {
  user,
};
