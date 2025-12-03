import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Alert, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as MuiRouterLink, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Navbar from '../../components/layout/navbar/navbar';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Footer from '../../components/layout/footer/footer';
import { estabelecimentoService, type Estabelecimento } from '../../services/estabelecimentoService';
import { produtoService, type Produto } from '../../services/produtoService';

// Ajuste para sua URL do backend
const API_BASE_URL = 'http://localhost:3000';

const Restaurante = () => {
    const { id } = useParams<{ id: string }>();
    const { user } = useAuth(); 
    const [restaurante, setRestaurante] = useState<Estabelecimento | null>(null);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Função para corrigir URLs de imagem (Adiciona http://localhost:3000 se faltar)
    const getImageUrl = (url: string | null | undefined) => {
        if (!url) return undefined;
        if (url.startsWith('http')) return url;
        return `${API_BASE_URL}${url}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const restauranteData = await estabelecimentoService.buscarPorId(Number(id));
                setRestaurante(restauranteData);
                
                const produtosData = await produtoService.listarPorEstabelecimento(restauranteData.id);
                setProdutos(produtosData || []);
            } catch (err: any) {
                console.error(err);
                setError("Falha ao carregar dados.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    // 🔴 CORREÇÃO AQUI: 
    // O authContext define 'usuarioId', mas as vezes o token vem como 'id'. 
    // Verificamos os dois para garantir.
    const userId = user?.usuarioId ? Number(user.usuarioId) : (user as any)?.id ? Number((user as any).id) : null;
    
    // Pega o ID do dono do estabelecimento
    const donoId = restaurante?.usuarioId ? Number(restaurante.usuarioId) : null;
    
    // Verifica se os IDs batem
    const isDono = userId !== null && donoId !== null && userId === donoId;

    // Console log para você debugar se o botão não aparecer
    console.log("Debug Permissão:", { userId, donoId, isDono });

    return(
        <Box sx={{ backgroundColor:'#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
                    {/* --- FOTO DE PERFIL (AVATAR) --- */}
                    <Box
                        sx={{
                            position: 'relative',
                            left: '15%',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <Avatar
                            src={getImageUrl(restaurante.capaUrl) || undefined}
                            alt={restaurante.nome}
                            sx={{
                                width: { xs: 120, sm: 150, md: 200 }, 
                                height: { xs: 120, sm: 150, md: 200 },
                                border: '4px solid',
                                borderColor: 'primary.main',
                                boxShadow: 3,
                                bgcolor: '#ccc'
                            }}
                        >
                            <AccountCircleIcon sx={{ fontSize: 80, color: '#fff' }} />
                        </Avatar>
                    </Box>
                    
                    {/* Informações do Restaurante */}
                    <Box sx={{ ml: -4, position:'relative', left: '10%' }}>
                        <Typography sx={{ fontSize: { md: '2rem' }, fontWeight: 'bold' }}>
                            {restaurante.nome}
                        </Typography>
                        <Typography variant='subtitle1' color="text.secondary">
                            {restaurante.endereco}
                        </Typography>
                        <Typography variant='subtitle1' color="text.secondary">
                            CNPJ: {restaurante.cnpj || 'Não informado'}
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 1 }}>
                            {restaurante.descricao}
                        </Typography>
                    </Box>

                    {/* --- BOTÃO ADICIONAR PRATO --- */}
                    <Box sx={{ ml: 'auto', mr: 8, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                        {isDono ? (
                            <MuiRouterLink 
                                to={`/restaurante/${restaurante.id}/novo-produto`} 
                                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems:'center' }}
                            >
                                <AddBoxIcon sx={{ width: {md: 50 }, height: {md: 50}, color: 'primary.main', transition: '0.2s', '&:hover': { transform: 'scale(1.1)' } }}/>
                                <Typography variant='subtitle2' color="primary.main" fontWeight="bold">
                                    Adicionar Prato
                                </Typography>
                            </MuiRouterLink>
                        ) : null}
                    </Box>
                </Box>

                <Box sx={{ my: 6, borderBottom: '1px solid #cfcfcfff', maxWidth: 1050, margin: '0 auto'}} />
                
                <Paper elevation={0} sx={{ display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 900, margin: '0 auto', mt: 4, mb: 4, backgroundColor: 'transparent' }}>
                    <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mb: 4 }}>
                        Menu
                    </Typography>

                    {produtos.length === 0 && (
                        <Alert severity="info" sx={{ width: '100%', maxWidth: 600 }}>
                            Este restaurante ainda não cadastrou nenhum prato.
                        </Alert>
                    )}

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 850 }}>
                        {produtos.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: 2,
                                    bgcolor: 'white',
                                    borderRadius: 2,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                    transition: '0.2s',
                                    '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }
                                }}
                            >
                                {/* Imagem do Produto */}
                                <Avatar
                                    variant="rounded"
                                    src={getImageUrl(item.imagemUrl) || undefined}
                                    alt={item.nome}
                                    sx={{ width: 80, height: 80, mr: 2, bgcolor: '#eee' }}
                                />

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                                        {item.nome}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.descricao}
                                    </Typography>
                                </Box>
                                
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" color="primary.main" fontWeight="bold">
                                        R$ {Number(item.preco).toFixed(2).replace('.', ',')}
                                    </Typography>
                                </Box>        
                            </Box>
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