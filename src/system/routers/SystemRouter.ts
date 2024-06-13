import { Router } from 'express';
import { SystemController } from '../controllers/SystemController';
import { SystemService } from '../services/SystemService';

const systemController = new SystemController(new SystemService());

const router: Router = Router();

router.get('/get-all-stats', systemController.getAllStats);

router.post('/reboot', systemController.reboot);

router.post('/shutdown', systemController.shutdown);

export default router;