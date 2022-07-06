import { Router } from 'express';
import { getItems } from '../controllers/index-controller.js';

const router = Router();
router.get('/:query', getItems);

export default router;
