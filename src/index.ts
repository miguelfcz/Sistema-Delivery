import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoute);
app.use('/api', authRoute);

app.get('/', (req, res) => {
    res.send("Sistema de Delivery API")
});

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`); 
})