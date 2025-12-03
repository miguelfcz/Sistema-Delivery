import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, CircularProgress, Alert } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as MuiRouterLink, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/layout/navbar/navbar';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Footer from '../../components/layout/footer/footer';
import { estabelecimentoService, type Estabelecimento } from '../../services/estabelecimentoService';
import { produtoService, type Produto } from '../../services/produtoService';

const Restaurante = () => {
    const { id } = useParams<{ id: string }>();
    const { user } = useAuth();
    const [restaurante, setRestaurante] = useState<Estabelecimento | null>(null);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

useEffect(() => {
    const fetchData = async () => {

        if (!id) {
            setError("ID do restaurante não encontrado na URL.");
            setLoading(false);
            return;
        }

        try {
            setLoading(true);

            const restauranteData = await estabelecimentoService.buscarPorId(Number(id));
            setRestaurante(restauranteData);
            setError("");

            const produtosData = await produtoService.listarPorEstabelecimento(restauranteData.id);
            setProdutos(produtosData || []);

        } catch (err: any) {
            console.error(err);

            if (err?.response?.status === 404) {
                setError("Restaurante não encontrado.");
            } else {
                setError("Falha ao carregar os dados do restaurante.");
            }
        } finally {
            setLoading(false);   // <-- ESSENCIAL
        }
    };

    fetchData();
}, [id]);

    return(
        <Box sx={{ backgroundColor:'#ffffff'}}>
            <Navbar/>

            
            
                {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>}
                {error && <Alert severity="error" sx={{ maxWidth: 1050, margin: '2rem auto' }}>{error}</Alert>}

                {restaurante && !loading && (
                    <>
                    <Box sx={{ 
                    maxWidth: 1050, 
                    margin: '0 auto', 
                    display: 'flex', 
                    flexDirection: 'initial', 
                    alignItems: 'center', 
                    my: 4 
                }}>
                    {/* Foto de Perfil */}
                    <Box
                        sx={{
                            display: 'flex',
                            position: 'relative',
                            left: '15%',
                            transform: 'translateX(-50%)',
                            
                            // Tamanho da área da foto (Responsivo)
                            width: { xs: 120, sm: 150, md: 200 }, 
                            height: { xs: 120, sm: 150, md: 200 },
                            
                            borderRadius: '50%', 
                            overflow: 'hidden',
                            boxShadow: 3,
                            border: '4px solid primary.main', 
                            
                            cursor: 'pointer',
                            bgcolor: '#ccc' // Fundo cinza se não tiver imagem
                        }}
                    >
                        {/* 1. Imagem */}
                        {restaurante.capaUrl ? (
                            <Box
                                component="img"
                                src={restaurante.capaUrl}
                                alt={`Logo de ${restaurante.nome}`}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // Garante que a imagem cubra o círculo
                                }}
                            />
                        ) : (
                            <AccountCircleIcon 
                                sx={{ 
                                    fontSize: '100%', 
                                    width: '100%', 
                                    height: '100%', 
                                    color: '#666' 
                                }} 
                            />
                        )}
                    </Box>
                    
                    {/* Informações do Restaurante */}
                    <Box sx={{ml: -8 ,position:'relative', left: '14%'}}>
                        <Typography sx={{ fontSize: { md: '2rem' }, fontWeight: 'bold', mt: 0, }} >
                            {restaurante.nome}
                        </Typography>
                        <Typography variant='subtitle1' color="text.secondary">
                            {restaurante.endereco}
                        </Typography>
                        <Typography variant='subtitle1' color="text.secondary">
                            CNPJ: {restaurante.cnpj}
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 1 }}>
                            {restaurante.descricao}
                        </Typography>
                    </Box>

                        
                        <Box sx={{ml: '36%', mt: '3%', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                            
                            {/* A opção de criar item só vai aparecer se o usuário logado for o dono do restaurante */}
                            {user?.id === restaurante.usuarioId && (
                        <MuiRouterLink to={`/adicionar-item-cardapio`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                            <AddBoxIcon sx={{ width: {md: 50 }, height: {md: 50} }}/>
                            <Typography variant='subtitle2'>
                                Adicionar Prato
                            </Typography>
                         </MuiRouterLink>
                            )}
                        </Box>

                </Box>


                    {/* Linha Separadora */}
                    <Box sx={{ my: 6, borderBottom: '1px solid #cfcfcfff', maxWidth: 1050, margin: '0 auto'}} />
                
                
                <Paper elevation={1} sx={{ display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 900, margin: '0 auto', mt: 4, mb: 4, backgroundColor: '#f5f5f5',p: { xs: 2, md: 4 } }}>
                     
                    <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mb: 7 }}>
                                 Menu
                    </Typography>


            {/* LISTA VERTICAL (listProducts) */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '68vw', maxWidth: 850}}>
            {produtos.map((item, index) => (
              // 🚨 ITEM DA LISTA TAMBÉM É CLICÁVEL
              <MuiRouterLink 
                key={index} 
                to={`/produto/${item.id}`} // Ajuste o link se necessário
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pb: 1,
                    cursor: 'pointer', 
                    transition: 'opacity 0.2s',
                    '&:hover': {
                      opacity: 0.8, 
                    },
                    borderBottom: index < produtos.length - 1 ? '1px solid #cfcfcfff' : 'none'
                  }}
                >
                  {/* Imagem do Item da Lista */}
                  <Box
                    component="img"
                    src={item.imagemUrl || 'https://placehold.co/80x80/eeeeee/cccccc?text=Sem+Foto'}
                    alt={item.nome}
                    sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, mr: 2 }}
                  />

                {/* Detalhes da Lista */}
                <Box>
                    <Typography variant="h6" fontWeight="600" sx={{ mb: 0.5 }}>
                      {item.nome}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.descricao}
                    </Typography>
                </Box>
                  

                  {/* Box refente ao valor dos itens */}
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto',  }}>
                    <Box 
                        sx={{ 
                            backgroundColor: 'primary.main', 
                            py: 0.5, 
                            px: 2, 
                            borderRadius: '999px',
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                        }}>

                        <Typography 
                            variant="body1"
                            color="#ffffff"
                            fontWeight="bold"
                        >
                            R$ {Number(item.preco).toFixed(2).replace('.', ',')}
                        </Typography>
                    </Box>
                </Box>        
           
                </Box>
              </MuiRouterLink>
            ))}
            </Box>
                </Paper>
                </>
                )}
                <Footer/>
            </Box>

    );
};

export default Restaurante;