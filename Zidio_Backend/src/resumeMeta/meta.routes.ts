import { Router } from 'express';
import { deleteResume, getMeta, updateMeta } from './meta.controller';

const router = Router();

router.get('/', getMeta);
router.patch('/:id', updateMeta);
router.delete('/:id', deleteResume);

export default router;
