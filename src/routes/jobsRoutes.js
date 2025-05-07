import { Router } from 'express';
import { getFactorialJobs, getFactorialJobById } from '../controllers/factorialController.js';

const router = Router();

router.get('/jobs', getFactorialJobs);
router.get('/jobs/:id', getFactorialJobById);

export default router; 