import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const generateOTP = (): number => {
  return crypto.randomInt(100000, 999999);
};

export const sendOTP = async (email: string, otp: number): Promise<void> => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for Authentication',
    text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
  };

  await transporter.sendMail(mailOptions);
};

export const verifyOTP = (storedOTP: number, inputOTP: number): boolean => {
  return storedOTP === inputOTP;
};
