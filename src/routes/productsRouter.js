import ProductController from '$controllers/ProductController';
import { Router } from 'express';

const productRouter = Router();

productRouter.get('/', ProductController.index);
productRouter.post('/', ProductController.create);
productRouter.get('/newest', ProductController.newest);
productRouter.get('/fillter', ProductController.fillter);

export default productRouter;
