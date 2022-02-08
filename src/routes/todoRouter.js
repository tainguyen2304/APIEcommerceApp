import TodoController from '$controllers/TodoController';
import { Router } from 'express';

const todoRouter = Router();

todoRouter.get('/', TodoController.index);
todoRouter.post('/', TodoController.create);
todoRouter.get('/:id', TodoController.show);
todoRouter.put('/:id', TodoController.update);
todoRouter.delete('/:id', TodoController.destroy);

export default todoRouter;
