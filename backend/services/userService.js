const User = require("../models/UserModel");

class UserService {
  async isUserExist(filter) {
    const user = await User.findOne(filter);
    return user;
  }

  async createUser(data) {
    const user = await User.create(data);
    return user;
  }
}

module.exports = new UserService();
