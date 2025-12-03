import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, Grid, IconButton, Divider, Container, Alert, TextField } from '@mui/material'; // 🚨 Adicionado TextField
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';

import { pedidoService, type ItemPedido, type PedidoInput } from '../../services/pedidoService'; // 🚨 Corrigido import para o novo serviço de pedido

// Dados mock
const mockCartItems = [
    { id: 1, name: 'Picanha Grelhada', value: 99.10, qty: 1, img: 'https://placehold.co/60x60/FFB06B/white?text=Picanha' },
    { id: 2, name: 'Feijoada Completa', value: 54.90, qty: 2, img: 'https://placehold.co/60x60/606060/white?text=Feijoada' },
    { id: 3, name: 'Salada Verão', value: 29.10, qty: 1, img: 'https://placehold.co/60x60/C0FFC0/white?text=Salada' },
];

interface CartItem {
    id: number;
    name: string;
    value: number;
    qty: number;
    img: string;
}

const PRIMARY_ORANGE = '#FF7F3A';
const MOCK_RESTAURANTE_ID = 1; // 🚨 ID Mockado, substitua pelo ID real do restaurante

// ----------------------------------------------------------------------
// LÓGICA DO COMPONENTE
// ----------------------------------------------------------------------

const Finalizar_pedido = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<CartItem[]>(mockCartItems); // 🚨 Inicializando com mockCartItems
    const [endereco, setEndereco] = useState(''); // 🚨 Novo estado para o endereço
    const [error, setError] = useState('');


    // Calcular o total
    const totalValue = items.reduce((sum, item) => sum + item.value * item.qty, 0);

    const handleQuantityChange = (id: number, delta: number) => {
        setItems(prevItems =>
            prevItems.map(item => {
                if (item.id === id) {
                    const newQty = item.qty + delta;
                    // Garante que a quantidade mínima seja 1
                    return { ...item, qty: newQty > 0 ? newQty : 1 };
                }
                return item;
            })
        );
    };

    // 🚨 Função corrigida para ser ASYNC
    const handleFinalizar = async () => {
        setError('');

        if (!endereco) {
            setError('Por favor, insira o endereço de entrega.');
            return;
        }

        try {
            const pedido: PedidoInput = {
                estabelecimentoId: MOCK_RESTAURANTE_ID, // Usando o ID mockado
                endereco: endereco,
                
                // Os itens do pedido devem seguir a interface ItemPedido
                itens: items.map(i => ({
                    produtoId: i.id,
                    quantidade: i.qty,
                })),
            };

            await pedidoService.criar(pedido);
            
            // Substituí alert por algo mais limpo
            navigate('/confirmacao', { state: { total: (totalValue + 5).toFixed(2).replace('.', ',') } }); 

        } catch (e: any) {
            console.error('Erro ao criar pedido:', e);
            setError(e.response?.data?.message || 'Erro ao processar o pedido. Tente novamente.');
        }
    };

    // Componente de Item da Lista de Pedidos
    const OrderItemComponent = ({ item }: { item: CartItem }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', py: 1.5, borderBottom: '1px solid #f0f0f0' }}>
            
            {/* Imagem */}
            <Box
                component="img"
                src={item.img}
                alt={item.name}
                sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 1, mr: 2 }}
            />
            
            {/* Detalhes e Valor */}
            <Box sx={{ flexGrow: 1, mr: 2 }}>
                <Typography variant="body1" fontWeight="600">{item.name}</Typography>
                <Typography variant="caption" color="text.secondary">Valor: R$ {item.value.toFixed(2).replace('.', ',')}</Typography>
            </Box>

            {/* Controles de Quantidade */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                
                {/* Botão de Menos */}
                <IconButton 
                    size="small" 
                    onClick={() => handleQuantityChange(item.id, -1)}
                    sx={{ color: PRIMARY_ORANGE, p: 0 }}
                    disabled={item.qty <= 1} // Desabilita se for 1
                >
                    <RemoveCircleIcon fontSize="large" />
                </IconButton>

                {/* Quantidade */}
                <Typography variant="body1" sx={{ minWidth: 20, textAlign: 'center' }}>
                    {item.qty}
                </Typography>
                
                {/* Botão de Mais */}
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
    
    // Se o carrinho estiver vazio
    if (items.length === 0) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
                <Navbar />
                <Container maxWidth="sm" sx={{ my: 4, flexGrow: 1 }}>
                    <Alert severity="info">Seu carrinho está vazio.</Alert>
                </Container>
                <Footer />
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Navbar />
            
            <Container component="main" maxWidth="md" sx={{ my: 4, flexGrow: 1 }}>
                
                {/* -------------------- CAIXA PRINCIPAL DO CARRINHO -------------------- */}
                <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
                    
                    <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
                        Carrinho
                    </Typography>

                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

                    <Grid container spacing={4}>
                        
                        {/* COLUNA ESQUERDA: ITENS DO PEDIDO (Pedidos) */}
                        <Grid item xs={12} md={7}>
                            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                                Pedidos
                            </Typography>
                            
                            <Box>
                                {items.map(item => (
                                    <OrderItemComponent key={item.id} item={item} />
                                ))}
                            </Box>
                        </Grid>

                        {/* COLUNA DIREITA: RESUMO (Total) */}
                        <Grid item xs={12} md={5}>
                            <Paper  sx={{ p: 3, bgcolor: '#fff' }}>
                                
                                <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                    Adicione o endereço de entrega
                                </Typography>

                                {/* 🚨 NOVO: CAMPO DE ENDEREÇO */}
                                <TextField
                                    label="Endereço de Entrega"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={endereco}
                                    onChange={(e) => setEndereco(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body1" color="text.secondary">Subtotal:</Typography>
                                    <Typography variant="body1">R$ {totalValue.toFixed(2).replace('.', ',')}</Typography>
                                </Box>
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                    <Typography variant="body1" color="text.secondary">Entrega:</Typography>
                                    <Typography variant="body1">R$ 5,00</Typography> {/* Valor fixo mockado */}
                                </Box>

                                <Divider sx={{ my: 2 }} />

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                    <Typography variant="h6" fontWeight="bold">Valor Total:</Typography>
                                    <Typography variant="h6" fontWeight="bold">R$ {(totalValue + 5).toFixed(2).replace('.', ',')}</Typography>
                                </Box>
                                
                                {/* Botão Finalizar */}
                                <Button
                                    variant="contained"
                                    // 🚨 Removido o async/await do escopo global e corrigido o onclick
                                    onClick={handleFinalizar}
                                    fullWidth
                                    size="large"
                                    sx={{ 
                                        mt: 2, 
                                        py: 1.5,
                                        backgroundColor: PRIMARY_ORANGE,
                                        '&:hover': {
                                            backgroundColor: '#E56D30',
                                        }
                                    }}
                                >
                                    Finalizar
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