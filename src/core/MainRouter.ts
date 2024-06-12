import { Router } from 'express';
import SystemRouter from '../system/routers/SystemRouter';

const router: Router = Router();

router.use('/system', SystemRouter);

export default router;