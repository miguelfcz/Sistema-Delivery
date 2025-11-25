import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';

import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';
import estabelecimentoRoute from './routes/estabelecimentoRoute'; 
import produtoRoute from './routes/produtoRoutes';
import pedidoRoute from './routes/pedidoRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//Aceitará requisições de qualquer origem
app.use(cors());

app.use('/api/usuarios', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/estabelecimentos', estabelecimentoRoute);
app.use('/api/produtos', produtoRoute);
app.use('/api/pedidos', pedidoRoute);

app.get('/', (req, res) => {
    res.send("Cardapio Digital API - Documentação disponível em /api-docs")
});

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);
});