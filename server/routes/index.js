import { Router } from 'express';
import { getItems, getItem } from '../controllers/index-controller.js';

const router = Router();
router.get('/single/:id', getItem);
router.get('/:query', getItems);

export default router;
