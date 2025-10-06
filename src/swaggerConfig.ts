// src/swaggerConfig.ts
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API TypeScript',
      version: '1.0.0',
      description: 'Documentação da API criada com Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      // É AQUI QUE VOCÊ VAI COLAR O CÓDIGO YAML
      schemas: {
        StatusPedido: {
          type: 'string',
          description: 'Status do pedido',
          enum: ['PENDENTE', 'EM_PREPARO', 'CONCLUIDO', 'CANCELADO'],
          example: 'PENDENTE'
        },
        Usuario: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'ID único do usuário.', example: 1 },
            email: { type: 'string', format: 'email', description: 'Endereço de e-mail do usuário.', example: 'joao.silva@email.com' },
            nome: { type: 'string', description: 'Nome completo do usuário.', example: 'João da Silva' },
            createdAt: { type: 'string', format: 'date-time', description: 'Data de criação do registro.' },
            updatedAt: { type: 'string', format: 'date-time', description: 'Data da última atualização do registro.' }
          }
        },
        // ... cole o resto dos schemas aqui ...
        PedidoItem: {
          // ...
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // Seus arquivos de rotas
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;