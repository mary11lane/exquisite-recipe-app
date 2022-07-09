import { Router } from 'express';
import { getRecipes, getRecipe } from '../controllers/index-controller.js';

const router = Router();
router.get('/:recipes', getRecipes);
router.get('/recipes/:id', getRecipe);

export default router;
