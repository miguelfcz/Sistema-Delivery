import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Button, 
    Paper, 
    Grid as Grid, 
    IconButton, 
    Divider, 
    Container, 
    Alert, 
    TextField,
    Avatar // Importei Avatar para garantir que a foto fique bonita
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import { pedidoService, type PedidoInput } from '../../services/pedidoService';
import { carrinhoService, type ItemCarrinho } from '../../services/carrinhoService';

const PRIMARY_ORANGE = '#FF7F3A';
// 1. URL do Back-end
const API_BASE_URL = 'http://localhost:3000';

const Finalizar_pedido = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<ItemCarrinho[]>([]);
    const [endereco, setEndereco] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const itensSalvos = carrinhoService.obterCarrinho();
        setItems(itensSalvos);
    }, []);

    // 2. Função para corrigir a URL da imagem
    const getImageUrl = (url: string | null | undefined) => {
        if (!url) return undefined;
        if (url.startsWith('http')) return url;
        return `${API_BASE_URL}${url}`;
    };

    const totalValue = items.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

    const handleQuantityChange = (id: number, delta: number) => {
        const itemAtual = items.find(i => i.id === id);
        if(itemAtual) {
            const novaQtd = itemAtual.quantidade + delta;
            const itensAtualizados = carrinhoService.atualizarQuantidade(id, novaQtd);
            setItems(itensAtualizados);
        }
    };

    const handleFinalizar = async () => {
        setError('');

        if (items.length === 0) {
            setError('Seu carrinho está vazio.');
            return;
        }

        if (!endereco) {
            setError('Por favor, insira o endereço de entrega.');
            return;
        }

        try {
            const estabelecimentoId = items[0].estabelecimentoId;

            const pedido: PedidoInput = {
                estabelecimentoId: estabelecimentoId,
                endereco: endereco,
                itens: items.map(i => ({
                    produtoId: i.id,
                    quantidade: i.quantidade,
                })),
            };

            await pedidoService.criar(pedido);
            carrinhoService.limparCarrinho();
            alert('Pedido realizado com sucesso!');
            navigate('/dashboard'); 

        } catch (e: any) {
            console.error('Erro ao criar pedido:', e);
            setError(e.response?.data?.message || 'Erro ao processar o pedido. Tente novamente.');
        }
    };

    const OrderItemComponent = ({ item }: { item: ItemCarrinho }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, borderBottom: '1px solid #f0f0f0' }}>
            {/* 3. Imagem corrigida usando Avatar e getImageUrl */}
            <Avatar
                variant="rounded"
                src={getImageUrl(item.imagemUrl) || undefined}
                alt={item.nome}
                sx={{ width: 70, height: 70, mr: 2, bgcolor: '#eee' }}
            />
            
            <Box sx={{ flexGrow: 1, mr: 2 }}>
                <Typography variant="body1" fontWeight="600">{item.nome}</Typography>
                <Typography variant="caption" color="text.secondary">Valor unitário: R$ {Number(item.preco).toFixed(2).replace('.', ',')}</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton 
                    size="small" 
                    onClick={() => handleQuantityChange(item.id, -1)}
                    sx={{ color: PRIMARY_ORANGE, p: 0 }}
                >
                    <RemoveCircleIcon fontSize="large" />
                </IconButton>

                <Typography variant="body1" sx={{ minWidth: 24, textAlign: 'center', fontWeight: 'bold' }}>
                    {item.quantidade}
                </Typography>
                
                <IconButton 
                    size="small" 
                    onClick={() => handleQuantityChange(item.id, 1)}
                    sx={{ color: PRIMARY_ORANGE, p: 0 }}
                >
                    <AddCircleIcon fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    );
    
    if (items.length === 0) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
                <Navbar />
                <Container maxWidth="sm" sx={{ my: 4, flexGrow: 1 }}>
                    <Alert severity="info" sx={{ mt: 4 }}>Seu carrinho está vazio.</Alert>
                </Container>
                <Footer />
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Navbar />
            
            <Container component="main" maxWidth="md" sx={{ my: 4, flexGrow: 1 }}>
                <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2, boxShadow: 3 }}>
                    
                    <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 4, color: '#333' }}>
                        Finalizar Pedido
                    </Typography>

                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, borderBottom: '2px solid #eee', pb: 1 }}>
                                Resumo dos Itens
                            </Typography>
                            <Box>
                                {items.map(item => (
                                    <OrderItemComponent key={item.id} item={item} />
                                ))}
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Paper sx={{ p: 3, bgcolor: '#fafafa', border: '1px solid #eee', borderRadius: 2 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                    Entrega
                                </Typography>

                                <TextField
                                    label="Endereço Completo"
                                    placeholder="Rua, Número, Complemento, Bairro..."
                                    variant="outlined"
                                    fullWidth
                                    margin="dense"
                                    value={endereco}
                                    onChange={(e) => setEndereco(e.target.value)}
                                    sx={{ mb: 2, bgcolor: 'white' }}
                                    multiline
                                    rows={3}
                                />
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" color="text.secondary">Subtotal:</Typography>
                                    <Typography variant="body2">R$ {totalValue.toFixed(2).replace('.', ',')}</Typography>
                                </Box>
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography variant="body2" color="text.secondary">Taxa de Entrega:</Typography>
                                    <Typography variant="body2">R$ 5,00</Typography>
                                </Box>

                                <Divider sx={{ my: 2 }} />

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                    <Typography variant="h6" fontWeight="bold">Total:</Typography>
                                    <Typography variant="h6" fontWeight="bold" color="primary">R$ {(totalValue + 5).toFixed(2).replace('.', ',')}</Typography>
                                </Box>
                                
                                <Button
                                    variant="contained"
                                    onClick={handleFinalizar}
                                    fullWidth
                                    size="large"
                                    sx={{ 
                                        py: 1.5,
                                        backgroundColor: PRIMARY_ORANGE,
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        '&:hover': { backgroundColor: '#E56D30' }
                                    }}
                                >
                                    Confirmar Pedido
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Footer />
        </Box>
    );
};

export default Finalizar_pedido;