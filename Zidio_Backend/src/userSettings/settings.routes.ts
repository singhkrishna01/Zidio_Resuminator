import { Router } from 'express';
import {
  deleteAccount,
  accountData,
  accountDataRequest,
} from './settings.controller';

const router = Router();

router.get('/account', accountData);
router.get('/account/request', accountDataRequest);
router.delete('/account', deleteAccount);

export default router;
