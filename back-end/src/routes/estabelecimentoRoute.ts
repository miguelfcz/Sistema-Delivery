import { Router } from 'express';
import { EstabelecimentoController } from '../controllers/estabelecimentoController';
import { authMiddleware } from '../middleware/authMiddleware';

console.log("--- [estabelecimentoRoute.ts] Arquivo de rotas de estabelecimento foi carregado! ---"); 


const router = Router();
const estabelecimentoController = new EstabelecimentoController();

router.get('/', estabelecimentoController.findAll);
router.get('/:id', estabelecimentoController.findById);
router.post('/', authMiddleware, estabelecimentoController.create);
router.put('/:id', authMiddleware, estabelecimentoController.update);
router.delete('/:id', authMiddleware, estabelecimentoController.deactivate);

export default router;