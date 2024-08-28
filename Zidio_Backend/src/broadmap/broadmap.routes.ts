import { Router } from 'express';
import { subBroadmap } from './broadmap.controller';
import { subemailValidation } from './validator/subscribe.validator';

const router = Router();

router.post('/subscribe', subemailValidation, subBroadmap);

export default router;
