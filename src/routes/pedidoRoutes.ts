import { Router } from 'express';
import { PedidoController } from '../controllers/pedidoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
const pedidoController = new PedidoController();

router.post('/', authMiddleware, pedidoController.create);

router.get('/', authMiddleware, pedidoController.findAllByUser);

router.patch('/:id/cancelar', authMiddleware, pedidoController.cancelar);

router.patch('/estabelecimento', authMiddleware, pedidoController.findAllByEstabelecimento);

router.patch('/:id/status', authMiddleware, pedidoController.updateStatus);

export default router;