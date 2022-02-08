import { authen } from '$middlewares/auth';
import cors from 'cors';
import authRouter from './authRouter';
import productRouter from './productsRouter';
import viewRouter from './reviewRouter';
import todoRouter from './todoRouter';

const routes = (app) => {
	app.use(cors());
	app.use('/auth', authRouter);
	app.use('/product', [authen, productRouter]);
	app.use('/review', [authen, viewRouter]);
	app.use('/todo', [authen, todoRouter]);
};

export default routes;
