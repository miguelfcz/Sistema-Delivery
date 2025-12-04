// src/pages/estatisticas/Estatisticas.tsx

import React, { useEffect, useState } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Paper, 
    Grid as Grid, 
    CircularProgress, 
    Card,
    CardContent,
    Alert // ✅ CORREÇÃO: Adicione 'Alert' aqui
} from '@mui/material';
import Navbar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import { useAuth } from '../../hooks/useAuth';
import { estabelecimentoService } from '../../services/estabelecimentoService';
import { pedidoService } from '../../services/pedidoService';

// Ícones para dar um visual profissional
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontIcon from '@mui/icons-material/Storefront';

const PRIMARY_ORANGE = '#FF7F3A';

const Estatisticas = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // Métricas
    const [totalVendas, setTotalVendas] = useState(0);
    const [qtdPedidos, setQtdPedidos] = useState(0);
    const [ticketMedio, setTicketMedio] = useState(0);
    const [qtdRestaurantes, setQtdRestaurantes] = useState(0);

    useEffect(() => {
        const carregarDados = async () => {
            if (!user?.usuarioId) {
                setLoading(false);
                setError("Usuário não autenticado ou sem ID de usuário.");
                return;
            }

            try {
                // 1. Busca todos os restaurantes do usuário logado
                const todosRestaurantes = await estabelecimentoService.listarTodos();
                const meusRestaurantes = todosRestaurantes.filter(est => Number(est.usuarioId) === Number(user.usuarioId));
                
                setQtdRestaurantes(meusRestaurantes.length);

                if (meusRestaurantes.length === 0) {
                     setError("Você não possui restaurantes para gerar estatísticas.");
                     return;
                }

                // 2. Calcula Métricas somando dados de todos os restaurantes
                let totalFaturado = 0;
                let totalPedidosCount = 0;

                // Faz a requisição de pedidos para cada restaurante em paralelo (mais rápido)
                await Promise.all(meusRestaurantes.map(async (rest) => {
                    try {
                        // Busca pedidos do restaurante atual
                        const pedidos = await pedidoService.listarPorEstabelecimento(rest.id) as any[];
                        
                        // Filtra apenas pedidos CONCLUIDOS para o faturamento real
                        const pedidosConcluidos = pedidos.filter((p: any) => p.status === 'CONCLUIDO');
                        
                        totalPedidosCount += pedidosConcluidos.length;
                        totalFaturado += pedidosConcluidos.reduce((acc, curr) => acc + Number(curr.total), 0);
                    } catch (e) {
                        console.error(`Erro ao carregar pedidos do restaurante ${rest.id}:`, e);
                        // O erro de um restaurante não deve quebrar a métrica dos outros
                    }
                }));

                setTotalVendas(totalFaturado);
                setQtdPedidos(totalPedidosCount);
                setTicketMedio(totalPedidosCount > 0 ? totalFaturado / totalPedidosCount : 0);

            } catch (error) {
                console.error("Erro geral ao carregar estatísticas:", error);
                setError("Ocorreu um erro ao buscar dados de estatísticas.");
            } finally {
                setLoading(false);
            }
        };

        carregarDados();
    }, [user]);

    // Componente de Card de Estatística
    const StatCard = ({ title, value, icon, color }: any) => (
        <Card elevation={3} sx={{ height: '100%', borderLeft: `6px solid ${color}`, borderRadius: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography color="textSecondary" variant="subtitle2" fontWeight="bold">
                            {title.toUpperCase()}
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: '#333', mt: 1 }}>
                            {value}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 1.5, borderRadius: '50%', bgcolor: `${color}20`, color: color }}>
                        {icon}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f7fa' }}>
            <Navbar />
            
            <Container maxWidth="lg" sx={{ my: 5, flexGrow: 1 }}>
                
                <Box sx={{ mb: 5, textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight="bold" color="#1a1a1a">
                        Painel Gerencial 📈
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                        Resumo de vendas dos seus {qtdRestaurantes} estabelecimentos.
                    </Typography>
                </Box>

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <CircularProgress sx={{ color: PRIMARY_ORANGE }} />
                    </Box>
                ) : error ? (
                    <Alert severity="error">{error}</Alert>
                ) : (
                    <Grid container spacing={3}>
                        {/* Faturamento */}
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard 
                                title="Faturamento Total" 
                                value={`R$ ${totalVendas.toFixed(2).replace('.', ',')}`} 
                                icon={<AttachMoneyIcon fontSize="large"/>} 
                                color="#2E7D32" 
                            />
                        </Grid>

                        {/* Pedidos */}
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard 
                                title="Pedidos Concluídos" 
                                value={qtdPedidos} 
                                icon={<ReceiptLongIcon fontSize="large"/>} 
                                color="#1976D2" 
                            />
                        </Grid>

                        {/* Ticket Médio */}
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard 
                                title="Ticket Médio" 
                                value={`R$ ${ticketMedio.toFixed(2).replace('.', ',')}`} 
                                icon={<TrendingUpIcon fontSize="large"/>} 
                                color="#ED6C02" 
                            />
                        </Grid>

                        {/* Restaurantes Ativos */}
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard 
                                title="Restaurantes" 
                                value={qtdRestaurantes} 
                                icon={<StorefrontIcon fontSize="large"/>} 
                                color="#9C27B0" 
                            />
                        </Grid>
                    </Grid>
                )}
            </Container>
            <Footer />
        </Box>
    );
};

export default Estatisticas;