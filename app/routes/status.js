import express from 'express';

import { StatusController } from '../controllers';

const router = express.Router();

router.get('/status', StatusController.get);

export default router;
