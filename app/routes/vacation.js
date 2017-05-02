import express from 'express';

import { VacationController } from '../controllers';

const router = express.Router();

router.get('/vacations', VacationController.list);
router.get('/vacations/:id', VacationController.find);
router.post('/vacations', VacationController.create);
router.put('/vacations', VacationController.update);
router.delete('/vacations', VacationController.delete);

export default router;
