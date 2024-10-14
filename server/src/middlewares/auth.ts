import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils';

interface AuthRequest extends Request {
  user?: { email: string };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  console.log('Cookies:', req.cookies);
  const token = req.cookies?.token;
  if (!token) {
    console.log('No token found');
    return res
      .status(401)
      .json({ message: 'Access denied, please login first!' });
  }

  try {
    // console.log('Verifying token');
    const decoded = verifyToken(token);
    // console.log('Decoded token:', decoded);
    // req.user = decoded as { email: string };
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(403).json({ message: 'Invalid token!' });
  }
};
