import { Admin } from '../utils/type.utlis';
import bcrypt from 'bcryptjs';
import prisma from '../utils/prisma.utlis';
import { signToken } from '../utils/jwt.utils';
import { sendOTP, generateOTP, verifyOTP } from '../utils/verify.utlis';

export class AuthService {
  async signup(
    email: string,
    password: string,
    username: string,
  ): Promise<{ user: Admin }> {
    const existingUser = await prisma.admin.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    const newUser = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        username,
        otp,
        otpExpires,
      },
    });

    await sendOTP(email, otp);

    return {
      user: newUser as Admin,
    };
  }

  async verifyOTP(
    email: string,
    inputOTP: number,
  ): Promise<{ user: Admin; token: string }> {
    const user = await prisma.admin.findUnique({ where: { email } });
    if (!user || !user.otp || !user.otpExpires) {
      throw new Error('Invalid OTP request');
    }

    if (user.otpExpires < new Date()) {
      throw new Error('OTP has expired');
    }

    if (!verifyOTP(user.otp, inputOTP)) {
      throw new Error('Invalid OTP');
    }

    // Clear OTP after successful verification
    await prisma.admin.update({
      where: { email },
      data: { otp: null, otpExpires: null },
    });

    const token = signToken(user.email);
    return { user: user as Admin, token };
  }

  async login(
    email: string,
    password: string,
    token: string,
  ) /*: Promise<{ otp: number }>*/ {
    const user = await prisma.admin.findUnique({ where: { email } });
    if (!user) {
      throw new Error('User does not exist in our system');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('You have given Invalid credentials');
    }

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    await prisma.admin.update({
      where: { email },
      data: { otp, otpExpires },
    });

    await sendOTP(email, otp);

    return { otp };
  }
}
