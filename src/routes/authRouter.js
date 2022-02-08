import AuthController from '$controllers/AuthController';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', AuthController.login);
authRouter.post('/register', AuthController.register);

export default authRouter;
