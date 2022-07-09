import { Router } from 'express';
import { signup, login } from '../controllers/authControllers.js';

const router = Router();

router.post('/');
router.post('/signup', signup);
router.post('/login', login);
// import { Router } from 'express';
// import { getRecipes, getRecipe } from '../controllers/index-controller.js';

// const router = Router();
// router.get('/:recipes', getRecipes);
// router.get('/recipes/:id', getRecipe);

// export default router;

export default router;
