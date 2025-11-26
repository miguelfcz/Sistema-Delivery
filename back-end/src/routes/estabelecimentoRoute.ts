import { Router } from 'express';
import { EstabelecimentoController } from '../controllers/estabelecimentoController';
import { authMiddleware } from '../middleware/authMiddleware';

console.log("--- [estabelecimentoRoute.ts] Arquivo de rotas de estabelecimento foi carregado! ---"); 

const router = Router();
const estabelecimentoController = new EstabelecimentoController();

/**
 * @swagger
 * tags:
 *   - name: Estabelecimentos
 *     description: Gestão de restaurantes
 */

/**
 * @swagger
 * /estabelecimentos:
 *   get:
 *     summary: Lista todos os estabelecimentos ativos
 *     tags: [Estabelecimentos]
 *     responses:
 *       200:
 *         description: Lista de estabelecimentos
 */

/**
 * @swagger
 * /estabelecimentos:
 *   post:
 *     summary: Cria um novo estabelecimento (Autenticado)
 *     tags: [Estabelecimentos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estabelecimento'
 *     responses:
 *       201:
 *         description: Estabelecimento criado
 */

/**
 * @swagger
 * /estabelecimentos/{id}:
 *   get:
 *     summary: Busca estabelecimento por ID
 *     tags: [Estabelecimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Estabelecimento encontrado
 */

/**
 * @swagger
 * /estabelecimentos/{id}:
 *   put:
 *     summary: Atualiza um estabelecimento (Autenticado)
 *     tags: [Estabelecimentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estabelecimento'
 *     responses:
 *       200:
 *         description: Estabelecimento atualizado
 */

/**
 * @swagger
 * /estabelecimentos/{id}:
 *   delete:
 *     summary: Desativa um estabelecimento (Autenticado)
 *     tags: [Estabelecimentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Estabelecimento desativado
 */

router.get('/', estabelecimentoController.findAll);
router.get('/:id', estabelecimentoController.findById);
router.post('/', authMiddleware, estabelecimentoController.create);
router.put('/:id', authMiddleware, estabelecimentoController.update);
router.delete('/:id', authMiddleware, estabelecimentoController.deactivate);

export default router;
