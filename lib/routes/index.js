import express from 'express';

import carreras from './carreras2';
const router = express.Router();

router.use('/carreras', carreras);
export default router;
