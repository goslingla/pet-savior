import { Router } from 'express';
import { registerAnimal, getAnimals } from '../controllers/animal-controller';
import { isAuthenticated } from '../middleware/auth-middleware';

const router = Router();

router.post('/register', isAuthenticated, registerAnimal);
router.get('/', getAnimals);

export default router;