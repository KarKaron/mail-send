import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const {
  EMAIL_HOST,
  EMAIL_HOST_PASSWORD,
  EMAIL_HOST_USER,
  EMAIL_PORT
} = process.env;

class Mail {
  #transporter = null;

  constructor() {
    this.#transporter = this.#getTransporter();
  }

  #getTransporter() {
    return nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      auth: {
        user: EMAIL_HOST_USER,
        pass: EMAIL_HOST_PASSWORD,
      },
      secure: true,
    });
  }

  async send(reciever, subject, message) {
    try {
      const info = await this.#transporter.sendMail({
        from: `<${EMAIL_HOST_USER}>`,
        to: reciever,
        subject: subject,
        text: message
      });
      return info.messageId;      
    } catch (e) {
      return e;
    }
  }
}

export default new Mail();