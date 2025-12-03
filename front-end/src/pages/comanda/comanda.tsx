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
    Snackbar
} from '@mui/material';
import Navbar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import { pedidoService } from '../../services/pedidoService'; // Importando o service real
import { useAuth } from '../../hooks/useAuth'; // Supondo que você tenha o hook de auth

// Interfaces ajustadas para o retorno provável do Back-end
// Verifique no console.log se o seu backend retorna exatamente essa estrutura (Prisma)
interface Produto {
    nome: string;
    preco?: number;
}

interface ItemPedido {
    id: number;
    quantidade: number;
    produto: Produto;
}

interface Cliente {
    id: number;
    nome: string;
    email: string;
}

interface RestauranteInfo {
    nome: string;
}

interface Pedido {
    id: number;
    total: number;
    endereco: string;
    status: string;
    criadoEm?: string;
    usuario: Cliente; // O backend geralmente retorna 'usuario' ou 'cliente' dependendo do include do Prisma
    itens: ItemPedido[];
    estabelecimento: RestauranteInfo;
}

const PRIMARY_ORANGE = '#FF7F3A';

const Comanda = () => {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<number | null>(null); // Loading por botão
    const [error, setError] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    
    // Auth context para pegar dados do usuário/restaurante se disponível
    const { user } = useAuth(); 

    // 🚨 ATENÇÃO: Aqui você precisa definir como pega o ID do estabelecimento logado.
    // Se o usuário logado FOR o dono, talvez o ID do estabelecimento esteja atrelado ao user.
    // Por enquanto, vou deixar fixo ou tentar pegar do user, ajuste conforme sua lógica de login.
    const ID_ESTABELECIMENTO_ATUAL = 3; 

    const fetchPedidos = useCallback(async () => {
        try {
            setLoading(true);
            const dados = await pedidoService.listarPorEstabelecimento(ID_ESTABELECIMENTO_ATUAL);
            
            // Filtra apenas pedidos que NÃO estão concluídos ou cancelados, se desejar.
            // Se quiser mostrar todos, remova o filter.
            const pedidosAtivos = dados.filter((p: any) => p.status !== 'CONCLUIDO' && p.status !== 'CANCELADO');
            
            setPedidos(pedidosAtivos);
        } catch (err) {
            console.error("Erro ao buscar pedidos:", err);
            setError('Não foi possível carregar os pedidos. Verifique sua conexão.');
        } finally {
            setLoading(false);
        }
    }, [ID_ESTABELECIMENTO_ATUAL]);

    useEffect(() => {
        fetchPedidos();
        
        // Opcional: Polling para atualizar pedidos a cada 30 segundos
        const interval = setInterval(fetchPedidos, 30000);
        return () => clearInterval(interval);
    }, [fetchPedidos]);

    const handleFinalizarPedido = async (idPedido: number) => {
        setActionLoading(idPedido);
        setError(null);
        
        try {
            // Chama a API real
            await pedidoService.atualizarStatus(idPedido, 'CONCLUIDO');
            
            setSuccessMsg(`Pedido #${idPedido} finalizado com sucesso!`);
            
            // Atualiza a lista removendo o item ou buscando novamente
            setPedidos(prev => prev.filter(p => p.id !== idPedido));
            
        } catch (e: any) {
            console.error("Erro ao finalizar pedido:", e);
            setError(`Falha ao finalizar pedido #${idPedido}. Tente novamente.`);
        } finally {
            setActionLoading(null);
        }
    };

    const handleCloseSnack = () => setSuccessMsg(null);

    // Componente Item da Comanda
    const PedidoItem = ({ pedido }: { pedido: Pedido }) => (
        <Paper 
            elevation={2} 
            sx={{ 
                mb: 3, 
                p: 3, 
                borderLeft: `5px solid ${pedido.status === 'EM_PREPARO' ? '#2196F3' : PRIMARY_ORANGE}`, 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 2
            }}
        >
            <Box sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: '50%' } }}>
                <Typography variant="subtitle1" fontWeight="bold">
                    Pedido #{pedido.id} - Cliente: {pedido.usuario?.nome || 'Cliente não identificado'}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    **Endereço:** {pedido.endereco}
                </Typography>
                
                <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: 'text.secondary' }}>
                   Status: {pedido.status}
                </Typography>

                <Divider sx={{ my: 1 }} />
                
                <Box>
                    {pedido.itens && pedido.itens.map((item, index) => (
                        <Typography key={index} variant="body2" color="text.primary" sx={{ fontStyle: 'italic' }}>
                            - {item.quantidade}x {item.produto?.nome}
                        </Typography>
                    ))}
                </Box>
                
                <Typography variant="body1" fontWeight="bold" color={PRIMARY_ORANGE} sx={{ mt: 1 }}>
                    Total: R$ {Number(pedido.total).toFixed(2).replace('.', ',')}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: 150 }}>
                <Button
                    variant="contained"
                    onClick={() => handleFinalizarPedido(pedido.id)}
                    disabled={actionLoading === pedido.id}
                    sx={{ 
                        backgroundColor: PRIMARY_ORANGE,
                        '&:hover': { backgroundColor: '#E56D30' }
                    }}
                >
                    {actionLoading === pedido.id ? <CircularProgress size={24} color="inherit" /> : 'Finalizar'}
                </Button>
            </Box>
        </Paper>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Navbar />
            
            <Container component="main" maxWidth="lg" sx={{ my: 4, flexGrow: 1 }}>
                <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
                    Comanda de Pedidos
                </Typography>

                {error && <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>{error}</Alert>}
                
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <CircularProgress sx={{ color: PRIMARY_ORANGE }} />
                    </Box>
                ) : pedidos.length === 0 ? (
                    <Alert severity="info" sx={{ mt: 3 }}>Nenhum pedido pendente no momento.</Alert>
                ) : (
                    <Box>
                        {pedidos.map(pedido => (
                            <PedidoItem key={pedido.id} pedido={pedido} />
                        ))}
                    </Box>
                )}
            </Container>
            
            <Snackbar open={!!successMsg} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                    {successMsg}
                </Alert>
            </Snackbar>

            <Footer />
        </Box>
    );
};

export default Comanda;