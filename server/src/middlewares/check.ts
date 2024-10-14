import { Router, Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils';

interface AuthRequest extends Request {
  user?: { email: string };
}

// Middleware to check if the user is logged in by verifying their JWT token
export const checkIfLoggedIn = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.cookies?.token; // Read token from cookies
  if (!token) {
    // If there's no token, they are not logged in, so allow login
    return next();
  }
  try {
    const decoded = verifyToken(token); // Verify JWT token
    req.user = decoded as { email: string }; // Attach user email to request
    res.status(403).json({ message: 'You are already logged in!' }); // Prevent login if already logged in
  } catch (error) {
    // If token is invalid or expired, allow login
    next(); // Continue to the next middleware or route handler
  }
};
