import { Router } from 'express';
import { getHome } from './utils.controller';

const router = Router();

router.get('/', getHome);

export default router;
