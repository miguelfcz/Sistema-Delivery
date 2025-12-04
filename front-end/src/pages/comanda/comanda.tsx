import React, { useState, useEffect, useCallback } from 'react';
import { 
    Box, 
    Typography, 
    Button, 
    Paper, 
    Divider, 
    Container, 
    CircularProgress,
    Alert,
    Snackbar,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    type SelectChangeEvent
} from '@mui/material';
import Navbar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
// Não importamos 'type Pedido' daqui para evitar conflito. Usaremos a definição local.
import { pedidoService } from '../../services/pedidoService'; 
import { estabelecimentoService, type Estabelecimento } from '../../services/estabelecimentoService';
import { useAuth } from '../../hooks/useAuth';

const PRIMARY_ORANGE = '#FF7F3A';

// --- INTERFACES CORRIGIDAS ---
// Estas interfaces dizem ao TypeScript exatamente o que o Back-end está enviando
interface Produto {
    nome: string;
}

interface ItemPedido {
    id: number;
    quantidade: number;
    produto: Produto;
}

interface UsuarioSimplificado {
    nome: string;
}

// Interface completa para a Comanda
interface PedidoComanda {
    id: number;
    total: number;
    endereco: string;
    status: string;
    usuario?: UsuarioSimplificado; // Pode vir nulo se o usuário foi deletado
    itens: ItemPedido[];
}

const Comanda = () => {
    const { user } = useAuth();
    
    const [meusRestaurantes, setMeusRestaurantes] = useState<Estabelecimento[]>([]);
    const [restauranteSelecionado, setRestauranteSelecionado] = useState<number | ''>('');

    // Agora usamos 'PedidoComanda[]' para o estado
    const [pedidos, setPedidos] = useState<PedidoComanda[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    // 1. Busca restaurantes
    useEffect(() => {
        const carregarRestaurantes = async () => {
            if (!user?.usuarioId) {
                setLoading(false);
                return;
            }

            try {
                const todos = await estabelecimentoService.listarTodos();
                const doUsuario = todos.filter(est => Number(est.usuarioId) === Number(user.usuarioId));
                setMeusRestaurantes(doUsuario);

                if (doUsuario.length === 1) {
                    setRestauranteSelecionado(doUsuario[0].id);
                } else if (doUsuario.length === 0) {
                    setError("Você ainda não possui restaurantes cadastrados.");
                }
            } catch (err) {
                console.error(err);
                setError("Erro ao carregar seus restaurantes.");
            } finally {
                setLoading(false);
            }
        };

        carregarRestaurantes();
    }, [user]);

    // 2. Busca pedidos
    const fetchPedidos = useCallback(async () => {
        if (!restauranteSelecionado) return;

        try {
            // O 'as any' aqui força o TS a aceitar que o retorno da API tem mais campos do que ele esperava inicialmente
            const dados = await pedidoService.listarPorEstabelecimento(Number(restauranteSelecionado)) as any[];
            
            const pedidosAtivos = dados.filter((p: any) => p.status !== 'CONCLUIDO' && p.status !== 'CANCELADO');
            
            pedidosAtivos.sort((a: any, b: any) => {
                if (a.status === 'EM_PREPARO' && b.status !== 'EM_PREPARO') return -1;
                if (a.status !== 'EM_PREPARO' && b.status === 'EM_PREPARO') return 1;
                return 0;
            });

            // Mapeia para garantir que a estrutura bata com PedidoComanda
            const pedidosFormatados: PedidoComanda[] = pedidosAtivos.map(p => ({
                id: p.id,
                total: p.total,
                endereco: p.endereco,
                status: p.status,
                usuario: p.usuario, // O backend manda um objeto { nome: "..." }
                itens: p.itens      // O backend manda array de itens
            }));

            setPedidos(pedidosFormatados);
            if (error === "Selecione um restaurante acima.") setError(null); 

        } catch (err) {
            console.error(err);
        }
    }, [restauranteSelecionado]);

    useEffect(() => {
        if (restauranteSelecionado) {
            fetchPedidos();
            const interval = setInterval(fetchPedidos, 10000);
            return () => clearInterval(interval);
        }
    }, [fetchPedidos, restauranteSelecionado]);

    const handleChangeRestaurante = (event: SelectChangeEvent<number | ''>) => {
        const id = Number(event.target.value);
        setRestauranteSelecionado(id);
        setLoading(true);
        setTimeout(() => setLoading(false), 500);
    };

    const handleFinalizarPedido = async (idPedido: number) => {
        setActionLoading(idPedido);
        try {
            await pedidoService.atualizarStatus(idPedido, 'CONCLUIDO');
            setSuccessMsg(`Pedido #${idPedido} finalizado!`);
            setPedidos(prev => prev.filter(p => p.id !== idPedido));
        } catch (e) {
            alert("Erro ao finalizar pedido.");
        } finally {
            setActionLoading(null);
        }
    };

    const handleEmPreparo = async (idPedido: number) => {
        setActionLoading(idPedido);
        try {
            await pedidoService.atualizarStatus(idPedido, 'EM_PREPARO');
            setSuccessMsg(`Pedido #${idPedido} agora está em preparo!`);
            fetchPedidos();
        } catch (e) {
            alert("Erro ao atualizar status.");
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Navbar />
            
            <Container component="main" maxWidth="lg" sx={{ my: 4, flexGrow: 1 }}>
                
                <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h3" fontWeight="bold" textAlign="center">
                        Comanda Digital
                    </Typography>

                    {!loading && meusRestaurantes.length > 0 && (
                        <FormControl sx={{ minWidth: 300, mt: 1 }}>
                            <InputLabel id="select-restaurante-label">Selecione seu Restaurante</InputLabel>
                            <Select
                                labelId="select-restaurante-label"
                                value={restauranteSelecionado}
                                label="Selecione seu Restaurante"
                                onChange={handleChangeRestaurante}
                                sx={{ bgcolor: 'white' }}
                            >
                                {meusRestaurantes.map((rest) => (
                                    <MenuItem key={rest.id} value={rest.id}>
                                        {rest.nome}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </Box>

                {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
                
                {!loading && meusRestaurantes.length === 0 && (
                    <Alert severity="warning">Você não possui restaurantes cadastrados.</Alert>
                )}

                {!loading && meusRestaurantes.length > 0 && !restauranteSelecionado && (
                    <Alert severity="info">Selecione um restaurante acima para visualizar os pedidos.</Alert>
                )}

                {loading && restauranteSelecionado ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <CircularProgress sx={{ color: PRIMARY_ORANGE }} />
                    </Box>
                ) : pedidos.length === 0 && restauranteSelecionado ? (
                    <Paper sx={{ p: 4, textAlign: 'center', mt: 2 }}>
                        <Typography variant="h6" color="text.secondary">Tudo calmo por aqui.</Typography>
                        <Typography variant="body2">Nenhum pedido pendente no momento.</Typography>
                    </Paper>
                ) : (
                    <Box>
                        {pedidos.map((pedido) => (
                            <Paper 
                                key={pedido.id}
                                elevation={3} 
                                sx={{ 
                                    mb: 3, p: 3, 
                                    borderLeft: `8px solid ${pedido.status === 'EM_PREPARO' ? '#2196F3' : PRIMARY_ORANGE}`,
                                    display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                                    alignItems: 'center', gap: 3,
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.01)' }
                                }}
                            >
                                <Box sx={{ flexGrow: 1, width: '100%' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="h6" fontWeight="bold">Pedido #{pedido.id}</Typography>
                                        <Typography 
                                            sx={{ 
                                                bgcolor: pedido.status === 'EM_PREPARO' ? '#E3F2FD' : '#FFF3E0', 
                                                color: pedido.status === 'EM_PREPARO' ? '#1976D2' : '#E65100',
                                                px: 2, py: 0.5, borderRadius: 4, fontSize: '0.85rem', fontWeight: 'bold',
                                                border: `1px solid ${pedido.status === 'EM_PREPARO' ? '#90CAF9' : '#FFCC80'}`
                                            }}
                                        >
                                            {pedido.status.replace('_', ' ')}
                                        </Typography>
                                    </Box>
                                    
                                    <Typography variant="body1"><strong>Cliente:</strong> {pedido.usuario?.nome || 'Cliente'}</Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}><strong>Endereço:</strong> {pedido.endereco}</Typography>
                                    
                                    <Divider />
                                    
                                    <Box sx={{ my: 2, bgcolor: '#fafafa', p: 2, borderRadius: 2 }}>
                                        {/* Tipagem explicita no map remove o erro de 'any' */}
                                        {pedido.itens?.map((item: ItemPedido, idx: number) => (
                                            <Typography key={idx} variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span>{item.quantidade}x {item.produto?.nome}</span>
                                            </Typography>
                                        ))}
                                    </Box>
                                    
                                    <Typography variant="h5" color={PRIMARY_ORANGE} sx={{ mt: 1, fontWeight: 'bold', textAlign: 'right' }}>
                                        Total: R$ {Number(pedido.total).toFixed(2).replace('.', ',')}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 150 }}>
                                    
                                    {pedido.status === 'PENDENTE' && (
                                        <Button
                                            variant="outlined"
                                            onClick={() => handleEmPreparo(pedido.id)}
                                            disabled={actionLoading === pedido.id}
                                            sx={{ py: 1.5, borderColor: '#2196F3', color: '#2196F3' }}
                                        >
                                            {actionLoading === pedido.id ? <CircularProgress size={24} /> : 'Iniciar Preparo'}
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={() => handleFinalizarPedido(pedido.id)}
                                        disabled={actionLoading === pedido.id}
                                        sx={{ 
                                            py: 1.5,
                                            bgcolor: PRIMARY_ORANGE,
                                            '&:hover': { bgcolor: '#E56D30' }
                                        }}
                                    >
                                        {actionLoading === pedido.id ? <CircularProgress size={24} color="inherit"/> : 'Concluir Pedido'}
                                    </Button>
                                </Box>
                            </Paper>
                        ))}
                    </Box>
                )}
            </Container>
            
            <Snackbar open={!!successMsg} autoHideDuration={4000} onClose={() => setSuccessMsg(null)}>
                <Alert severity="success">{successMsg}</Alert>
            </Snackbar>

            <Footer />
        </Box>
    );
};

export default Comanda;