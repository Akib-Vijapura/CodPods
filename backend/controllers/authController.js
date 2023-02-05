const otpService = require("../services/otpService");
const hashService = require("../services/hashService");
const userService = require("../services/userService");
const tokenService = require("../services/jwtTokenService");

class AuthController {
  // otp send method
  async sendOtp(req, res) {
    const { phone } = req.body;

    if (!phone) {
      res.status(400).json({
        message: "Please fill phone filed",
      });
      return;
    }

    // Generating Otp
    const otp = await otpService.generateOtp();

    // hashing the otp
    const ttl = 1000 * 60 * 2;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;

    const hashOtp = hashService.hashOtp(data);

    // send otp to user's phone number
    try {
      await otpService.sendBySms(phone, otp);
      res.status(200).json({
        hash: `${hashOtp}.${expires}`,
        phone,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        Error: "message sending failed",
      });
      return;
    }
  }

  // otp verify method
  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;

    if (!otp || !hash || !phone) {
      res.status(400).json({
        message: "Please fill all fileds",
      });
      return;
    }

    // extrect hashedOtp and expire time
    const [hashedOtp, expires] = hash.split(".");

    if (Date.now() > +expires) {
      res.status(400).json({
        message: "otp has been expired!",
      });
      return;
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = otpService.verifyOtp(hashedOtp, data);

    if (!isValid) {
      res.status(400).json({
        message: "Invalid OTP",
      });
      return;
    }

    let user;

    try {
      user = await userService.isUserExist({ phone });

      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (error) {
      console.log(`Error : ${error.message}`);
      res.status(500).json({
        Error: "DB Error",
      });
      return;
    }

    // JWT Token
    const { accessToken, refreshToken } = tokenService.generateToken({
      _id: user._id,
    });

    res.cookie("refreshtoken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30, // Cookie expire in 30days
      httpOnly: true,
    });

    res.status(200).json({
      Token: accessToken,
    });
  }
}

module.exports = new AuthController();
