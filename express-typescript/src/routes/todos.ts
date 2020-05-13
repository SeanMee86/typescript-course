import { Router } from 'express';

import {createTodo, getTodos, removeTodo, updateTodo} from "../controllers/todos";

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', removeTodo);

export default router;