import { AuthController } from '../controllers/auth.controllers';
import { checkIfLoggedIn } from '../middlewares/check';
import express, { Router } from 'express';

const authRouter: Router = express.Router();

const authController = new AuthController();

// thses are for authentication
authRouter.post('/signup', async (req, res) => {
  await authController.signup(req, res);
});

// Route for user login
authRouter.post('/login', checkIfLoggedIn, async (req, res) => {
  await authController.login(req, res);
});

// Route for user logout
authRouter.post('/logout', (req, res) => {
  authController.logout(req, res);
});

authRouter.post('/verify', async (req, res) => {
  await authController.verifyOTP(req, res);
});

authRouter.post('/check', (req, res) => {
  authController.checkStatus(req, res);
});

export { authRouter };
