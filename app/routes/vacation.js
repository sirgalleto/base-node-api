import express from 'express';

const router = express.Router();

router.get('/vacations', (request, response) => response.json({}));

export default router;
