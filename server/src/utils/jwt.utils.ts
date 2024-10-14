import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'anonymous';

export const signToken = (email: string) => {
  const token = jwt.sign({ token: email }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

export const verifyToken = (token: string) => {
  const result = jwt.verify(token, JWT_SECRET);
  return result;
};
