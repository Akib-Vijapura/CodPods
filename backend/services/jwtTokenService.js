const jwt = require("jsonwebtoken");

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRES,
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRES,
    });

    return { accessToken, refreshToken };
  }
}

module.exports = new TokenService();
