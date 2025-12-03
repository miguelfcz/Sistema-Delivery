import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Button, 
    Paper, 
    Divider, 
    Container, 
    CircularProgress,
    Alert 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/layout/footer/footer';
import Navbar from '../../components/layout/navbar/navbar';


// 🚨 Interfaces Mock Atualizadas
interface Cliente {
    nome: string;
}
interface ItemDetalhe {
    produto: { nome: string };
    quantidade: number;
}
interface RestauranteInfo { // Novo objeto para o nome do restaurante
    nome: string;
}

interface PedidoComCliente {
    id: number;
    cliente: Cliente;
    total: number;
    endereco: string;
    // 🚨 Status removido
    restaurante: RestauranteInfo; // 🚨 Adicionada informação do restaurante
    itens: ItemDetalhe[];
}

const PRIMARY_ORANGE = '#FF7F3A';

const MOCK_PEDIDOS: PedidoComCliente[] = [
    { 
        id: 101, 
        cliente: { nome: 'João Silva' }, 
        total: 154.90, 
        endereco: 'Rua Principal, 456, Centro - João Pessoa', 
        restaurante: { nome: 'Churrascaria Gourmet' }, // Mockado
        itens: [{ produto: { nome: 'Picanha' }, quantidade: 1 }, { produto: { nome: 'Cerveja' }, quantidade: 3 }]
    },
    { 
        id: 102, 
        cliente: { nome: 'Maria Souza' }, 
        total: 59.90, 
        endereco: 'Av. Brasil, 100, Bairro Novo - Campina Grande', 
        restaurante: { nome: 'Pizzaria Express' }, // Mockado
        itens: [{ produto: { nome: 'Feijoada' }, quantidade: 1 }]
    },
    { 
        id: 103, 
        cliente: { nome: 'Carlos Oliveira' }, 
        total: 21.00, 
        endereco: 'Rua das Flores, 50, Bessa - João Pessoa', 
        restaurante: { nome: 'Café da Esquina' }, // Mockado
        itens: [{ produto: { nome: 'Refrigerante' }, quantidade: 2 }]
    },
];


const Comanda = () => {
    const [pedidos, setPedidos] = useState<PedidoComCliente[]>(MOCK_PEDIDOS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // 🚨 Supondo que você tem uma forma de obter o ID do restaurante logado
    const RESTAURANTE_ID_MOCK = 1; 

    // Função para simular a chamada de atualização de status (Ainda simula o Concluído)
    const handleFinalizarPedido = async (idPedido: number) => {
        setLoading(true);
        setError(null);
        
        try {
            // 🚨 Simulação de chamada de API: Mudar status para 'CONCLUIDO'
            // await pedidoService.atualizarStatus(idPedido, 'CONCLUIDO'); 
            
            // Atualiza o estado local: remove o pedido concluído da visualização ativa
            setPedidos(prev => 
                prev.filter(pedido => pedido.id !== idPedido)
            );

            alert(`Entrega do Pedido #${idPedido} concluída com sucesso!`);
            
        } catch (e: any) {
            console.error("Erro ao finalizar pedido:", e);
            setError(`Falha ao finalizar pedido #${idPedido}.`);
        } finally {
            setLoading(false);
        }
    };
    
    // 🚨 Removido o filtro de status; todos os pedidos são exibidos
    const activePedidos = pedidos; 

    // Componente Item da Comanda
    const PedidoItem = ({ pedido }: { pedido: PedidoComCliente }) => (
        <Paper 
            elevation={2} 
            sx={{ 
                mb: 3, 
                p: 3, 
                // 🚨 Novo destaque lateral baseado na cor da marca
                borderLeft: `5px solid ${PRIMARY_ORANGE}`, 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 2
            }}
        >
            {/* -------------------- COLUNA ESQUERDA: DETALHES DO PEDIDO -------------------- */}
            <Box sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: '50%' } }}>
                <Typography variant="subtitle1" fontWeight="bold">
                    Pedido #{pedido.id} - Cliente: {pedido.cliente.nome}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    **Endereço:** {pedido.endereco}
                </Typography>

                <Divider sx={{ my: 1 }} />
                
                <Typography variant="body2" color="text.primary" sx={{ fontStyle: 'italic' }}>
                    Itens: {pedido.itens.map(i => `${i.produto.nome} (${i.quantidade}x)`).join(', ')}
                </Typography>
                
                <Typography variant="body1" fontWeight="bold" color={PRIMARY_ORANGE} sx={{ mt: 1 }}>
                    Total: R$ {pedido.total.toFixed(2).replace('.', ',')}
                </Typography>
                
            </Box>

            {/* -------------------- COLUNA DIREITA: INFORMAÇÃO E AÇÃO -------------------- */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: 150 }}>
                
                {/* 🚨 NOVO: Nome do Restaurante */}
                <Typography 
                    variant="caption" 
                    fontWeight="bold"
                    sx={{ color: 'text.primary', mb: 1 }}
                >
                    RESTAURANTE: {pedido.restaurante.nome.toUpperCase()}
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => handleFinalizarPedido(pedido.id)}
                    disabled={loading}
                    sx={{ 
                        backgroundColor: PRIMARY_ORANGE,
                        '&:hover': { backgroundColor: '#E56D30' }
                    }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Finalizar Entrega'}
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

                {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
                
                {activePedidos.length === 0 ? (
                    <Alert severity="info" sx={{ mt: 3 }}>Nenhum pedido ativo no momento.</Alert>
                ) : (
                    <Box>
                        {activePedidos.map(pedido => (
                            <PedidoItem key={pedido.id} pedido={pedido} />
                        ))}
                    </Box>
                )}

            </Container>
            
            <Footer />
        </Box>
    );
};

export default Comanda;