import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cardápio Digital API',
      version: '1.0.0',
      description: 'API para gerenciamento de pedidos e cardápio digital.',
      contact: {
        name: 'Suporte',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Servidor Local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Usuario: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nome: { type: 'string', example: 'João Silva' },
            email: { type: 'string', format: 'email', example: 'joao@email.com' },
          },
        },
        LoginResponse: {
          type: 'object',
          properties: {
            token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
          },
        },
        Estabelecimento: {
          type: 'object',
          required: ['nome', 'endereco'],
          properties: {
            id: { type: 'integer', example: 1 },
            nome: { type: 'string', example: 'Burguer King' },
            endereco: { type: 'string', example: 'Rua Principal, 123' },
            ativo: { type: 'boolean', example: true },
            usuarioId: { type: 'integer', description: 'ID do dono', example: 5 },
          },
        },
        Produto: {
          type: 'object',
          required: ['nome', 'preco', 'estabelecimentoId'],
          properties: {
            id: { type: 'integer', example: 10 },
            nome: { type: 'string', example: 'X-Bacon' },
            descricao: { type: 'string', example: 'Hambúrguer com muito bacon' },
            preco: { type: 'number', format: 'float', example: 25.50 },
            estabelecimentoId: { type: 'integer', example: 1 },
          },
        },
        PedidoCreate: {
          type: 'object',
          required: ['estabelecimentoId', 'mesa', 'itens'],
          properties: {
            estabelecimentoId: { type: 'integer', example: 1 },
            mesa: { type: 'string', example: 'Mesa 05' },
            itens: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  produtoId: { type: 'integer', example: 10 },
                  quantidade: { type: 'integer', example: 2 },
                },
              },
            },
          },
        },
        Pedido: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 50 },
            mesa: { type: 'string', example: 'Mesa 05' },
            total: { type: 'number', example: 51.00 },
            status: { 
              type: 'string', 
              enum: ['PENDENTE', 'EM_PREPARO', 'CONCLUIDO', 'CANCELADO'],
              example: 'PENDENTE'
            },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
      },
    },
  },
  // Importante: aponta para todos os arquivos de rota onde escreveremos a documentação
  apis: ['./src/routes/*.ts'], 
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;