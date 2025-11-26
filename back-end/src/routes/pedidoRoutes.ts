import { Router } from 'express';
import { PedidoController } from '../controllers/pedidoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
const pedidoController = new PedidoController();

/**
 * @swagger
 * tags:
 *   - name: Pedidos
 *     description: Gestão de pedidos (Cliente e Restaurante)
 */

/**
 * @swagger
 * /pedidos:
 *   post:
 *     summary: Cliente cria um novo pedido na mesa
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PedidoCreate'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */

/**
 * @swagger
 * /pedidos:
 *   get:
 *     summary: Cliente lista seus próprios pedidos
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos do cliente
 */

/**
 * @swagger
 * /pedidos/estabelecimento:
 *   get:
 *     summary: Dono lista pedidos recebidos no restaurante
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do estabelecimento
 *     responses:
 *       200:
 *         description: Lista de pedidos do restaurante
 */

/**
 * @swagger
 * /pedidos/{id}/status:
 *   patch:
 *     summary: Dono atualiza o status do pedido
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [PENDENTE, EM_PREPARO, CONCLUIDO, CANCELADO]
 *     responses:
 *       200:
 *         description: Status atualizado
 */

/**
 * @swagger
 * /pedidos/{id}/cancelar:
 *   patch:
 *     summary: Cliente cancela um pedido
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido cancelado
 */

router.post('/', authMiddleware, pedidoController.create);

router.get('/', authMiddleware, pedidoController.findAllByUser);

router.patch('/:id/cancelar', authMiddleware, pedidoController.cancelar);

router.get('/estabelecimento', authMiddleware, pedidoController.findAllByEstabelecimento);

router.patch('/:id/status', authMiddleware, pedidoController.updateStatus);

export default router;
