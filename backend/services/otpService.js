const crypto = require("crypto");
const hashService = require("./hashService");

const smsSID = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;

const twilio = require("twilio")(smsSID, smsAuthToken, {
  lazyLoading: true,
});

class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(100000, 999999);
    return otp;
  }

  async sendBySms(phone, otp) {
    return await twilio.messages.create({
      to: phone,
      from: process.env.SMS_FROM_NUMBER,
      body: `Use ${otp} as CodPods authentication code.`,
    });
  }

  sendByEmail() {}

  verifyOtp(hashedOtp, data) {
    let computedHash = hashService.hashOtp(data);

    if (computedHash === hashedOtp) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new OtpService();
