import { Router } from 'express';
import { getFactorialJobs } from '../controllers/factorialController.js';

const router = Router();

router.get('/jobs', getFactorialJobs);

export default router; 