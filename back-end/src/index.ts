import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import uploadRoute from './routes/uploadRoute';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';

import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';
import estabelecimentoRoute from './routes/estabelecimentoRoute'; 
import produtoRoute from './routes/produtoRoutes';
import pedidoRoute from './routes/pedidoRoutes';

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

const allowedOrigins = [
    'http://localhost:5173', // Para desenvolvimento local
  'http://localhost:3000', // Caso você use outra porta local
  process.env.FRONTEND_URL,
]

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/usuarios', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/estabelecimentos', estabelecimentoRoute);
app.use('/api/produtos', produtoRoute);
app.use('/api/pedidos', pedidoRoute);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/api/upload', uploadRoute);

app.use(cors({
    origin: function (origin, callback) {
      // Permite requisições sem origem (ex: apps mobile, Postman, ou requests locais)
      if (!origin) return callback(null, true); 
      
      // Verifica se a origem da requisição está na lista de permitidas
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true, // Importante para lidar com cookies/sessões/JWTs
  }));

app.get('/', (req, res) => {
    res.send("Cardapio Digital API - Documentação disponível em /api-docs")
});

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);
});