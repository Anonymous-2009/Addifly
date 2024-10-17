import { Request, Response } from 'express';
import { AuthService } from '../services/auth.services';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async signup(req: Request, res: Response) {
    const { email, password, username } = req.body;

    try {
      const { user } = await this.authService.signup(email, password, username);
      return res.status(201).json({
        message: 'User created. Please verify OTP sent to your email.',
        user,
      });
    } catch (error: unknown) {
      return res.status(400).json({ message: this.getErrorMessage(error) });
    }
  }

  async verifyOTP(req: Request, res: Response) {
    const { email, otp } = req.body;

    try {
      const { user, token } = await this.authService.verifyOTP(email, otp);
      res.cookie('token', token, this.getCookieOptions());
      return res.status(200).json({
        message: 'OTP verified successfully. You are now logged in.',
        user,
      });
    } catch (error: unknown) {
      return res.status(400).json({ message: this.getErrorMessage(error) });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = req.cookies?.token;
    try {
      const { otp } = await this.authService.login(email, password, token);
      return res
        .status(200)
        .json({ message: 'OTP sent to your email. Please verify to log in.' });
    } catch (error: unknown) {
      return res.status(400).json({ message: this.getErrorMessage(error) });
    }
  }

  checkStatus(req: Request, res: Response) {
    const token = req.cookies?.token;
    if (token) {
      return res.status(200).json({ message: 'user is login', isLogin: true });
    } else {
      return res
        .status(400)
        .json({ message: 'user is not login', isLogin: false });
    }
  }

  logout(req: Request, res: Response) {
    res.clearCookie('token');
    return res
      .status(200)
      .json({ message: 'Logged out from our system', isLogin: false });
  }

  private getCookieOptions() {
    return {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
      maxAge: 3600000, // 1 hour
    };
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) return error.message;
    return String(error);
  }
}
