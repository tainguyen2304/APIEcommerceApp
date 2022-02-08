import ViewController from '$controllers/ReviewController';
import { Router } from 'express';

const reviewRouter = Router();

reviewRouter.post('/', ViewController.create);
reviewRouter.get('/random', ViewController.random);

export default reviewRouter;
