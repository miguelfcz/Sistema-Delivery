import { Router } from 'express';
import { ProdutoController } from '../controllers/produtoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
const produtoController = new ProdutoController();

router.get('/', produtoController.listByEstabelecimento);
router.get('/:id', produtoController.findById);
router.post('/', authMiddleware, produtoController.create);
router.put('/:id', authMiddleware, produtoController.update);
router.delete('/:id', authMiddleware, produtoController.delete);

export default router;