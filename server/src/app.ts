import express, { Application } from 'express';
import 'dotenv/config';
import { router } from './routes/index';
import errorHandler from './middlewares/errorHandler';
import cookieParser from 'cookie-parser';
import { authenticate } from './middlewares/auth';
import { authRouter } from './routes/auth';

const app: Application = express();

// cors for react to use this api in future
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

// app.use(authenticate as express.RequestHandler);
app.use('/auth', authRouter);
app.use('/crud', authenticate as express.RequestHandler, router);

export default app;
