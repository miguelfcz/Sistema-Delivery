import { Router } from 'express';
import { ProdutoController } from '../controllers/produtoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
const produtoController = new ProdutoController();

/**
 * @swagger
 * tags:
 *   - name: Produtos
 *     description: Gestão do cardápio
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista produtos de um estabelecimento
 *     tags: [Produtos]
 *     parameters:
 *       - in: query
 *         name: estabelecimentoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do estabelecimento para filtrar
 *     responses:
 *       200:
 *         description: Lista de produtos
 */

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um produto (Apenas dono)
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       201:
 *         description: Produto criado
 */

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produto encontrado
 */

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto (Apenas dono)
 *     tags: [Produtos]
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
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       200:
 *         description: Produto atualizado
 */

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Deleta um produto (Apenas dono)
 *     tags: [Produtos]
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
 *         description: Produto deletado
 */

router.get('/', produtoController.listByEstabelecimento);
router.get('/:id', produtoController.findById);
router.post('/', authMiddleware, produtoController.create);
router.put('/:id', authMiddleware, produtoController.update);
router.delete('/:id', authMiddleware, produtoController.delete);

export default router;
