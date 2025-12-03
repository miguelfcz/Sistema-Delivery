import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Alert, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as MuiRouterLink, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Navbar from '../../components/layout/navbar/navbar';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Ícone para pedir
import Footer from '../../components/layout/footer/footer';
import { estabelecimentoService, type Estabelecimento } from '../../services/estabelecimentoService';
import { produtoService, type Produto } from '../../services/produtoService';
import ModalFazerPedido from '../../components/ModalPedido/ModalFazerPedido'; 

const API_BASE_URL = 'http://localhost:3000';

const Restaurante = () => {
    const { id } = useParams<{ id: string }>();
    const { user } = useAuth();
    const [restaurante, setRestaurante] = useState<Estabelecimento | null>(null);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // --- ESTADOS PARA O MODAL DE PEDIDO ---
    const [modalOpen, setModalOpen] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

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
                setError("Erro ao carregar dados.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const userId = user?.usuarioId ? Number(user.usuarioId) : null;
    const donoId = restaurante?.usuarioId ? Number(restaurante.usuarioId) : null;
    const isDono = userId !== null && donoId !== null && userId === donoId;

    // Função para abrir o modal de pedido
    const handleAbrirPedido = (produto: Produto) => {
        if (isDono) {
            alert("O dono do estabelecimento não pode fazer pedidos no próprio restaurante.");
            return;
        }
        setProdutoSelecionado(produto);
        setModalOpen(true);
    };

    return(
        <Box sx={{ backgroundColor:'#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar/>

            {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>}
            {error && <Alert severity="error" sx={{ mx: 4 }}>{error}</Alert>}

            {restaurante && !loading && (
                <>
                <Box sx={{ maxWidth: 1050, margin: '0 auto', display: 'flex', alignItems: 'center', my: 4 }}>
                    <Box sx={{ position: 'relative', left: '15%', transform: 'translateX(-50%)' }}>
                        <Avatar
                            src={getImageUrl(restaurante.capaUrl) || undefined}
                            sx={{
                                width: { xs: 120, sm: 150, md: 200 }, 
                                height: { xs: 120, sm: 150, md: 200 },
                                border: '4px solid', borderColor: 'primary.main',
                                boxShadow: 3, bgcolor: '#ccc'
                            }}
                        >
                            <AccountCircleIcon sx={{ fontSize: 80, color: '#fff' }} />
                        </Avatar>
                    </Box>
                    
                    <Box sx={{ ml: -4, position:'relative', left: '10%' }}>
                        <Typography variant="h4" fontWeight="bold">{restaurante.nome}</Typography>
                        <Typography color="text.secondary">{restaurante.endereco}</Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>{restaurante.descricao}</Typography>
                    </Box>

                    <Box sx={{ ml: '10vw', mr: 8, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                        {isDono && (
                            <MuiRouterLink 
                                to={`/restaurante/${restaurante.id}/adicionar-item`} 
                                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems:'center' }}
                            >
                                <AddBoxIcon color="primary" sx={{ fontSize: 50 }}/>
                                <Typography variant='subtitle2' color="primary" fontWeight="bold">Adicionar Prato</Typography>
                            </MuiRouterLink>
                        )}
                    </Box>
                </Box>

                <Box sx={{ my: 6, borderBottom: '1px solid #ddd', maxWidth: 1050, margin: '0 auto'}} />
                
                <Paper elevation={0} sx={{ maxWidth: 900, margin: '0 auto', mb: 4, p: 2 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>Menu</Typography>
                    {produtos.length === 0 && <Typography align="center">Nenhum prato cadastrado.</Typography>}
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {produtos.map((item) => (
                            <Box 
                                key={item.id} 
                                sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    p: 2, 
                                    boxShadow: 1, 
                                    borderRadius: 2,
                                    // Adicionar efeito de hover para indicar interatividade
                                    transition: '0.2s',
                                    '&:hover': { boxShadow: 3, cursor: !isDono ? 'pointer' : 'default' }
                                }}
                                onClick={() => !isDono && handleAbrirPedido(item)} // Clique no card abre o pedido
                            >
                                <Avatar variant="rounded" src={getImageUrl(item.imagemUrl) || undefined} sx={{ width: 80, height: 80, mr: 2 }} />
                                <Box sx={{ flex: 1}}>
                                    <Typography fontWeight="bold">{item.nome}</Typography>
                                    <Typography variant="body2">{item.descricao}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1, ml: 2 }}>
                                    <Typography fontWeight="bold" color="primary">R$ {Number(item.preco).toFixed(2).replace('.', ',')}</Typography>
                                    
                                    {!isDono && (
                                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', fontSize: '0.8rem' }}>
                                            <ShoppingCartIcon fontSize="small" sx={{ mr: 0.5 }} />
                                            Pedir
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Paper>

                {/* --- COMPONENTE DO MODAL --- */}
                {restaurante && (
                    <ModalFazerPedido 
                        open={modalOpen} 
                        onClose={() => setModalOpen(false)} 
                        produto={produtoSelecionado}
                        estabelecimentoId={restaurante.id}
                    />
                )}
                </>
            )}
            <Footer/>
        </Box>
    );
};

export default Restaurante;