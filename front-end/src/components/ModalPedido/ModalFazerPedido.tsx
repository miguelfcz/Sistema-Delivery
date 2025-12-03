import React, { useState } from 'react';
import { 
    Dialog, DialogTitle, DialogContent, DialogActions, Button, 
    TextField, Box, Typography 
} from '@mui/material';
import { type Produto } from '../../services/produtoService';
import { carrinhoService } from '../../services/carrinhoService';

interface ModalFazerPedidoProps {
    open: boolean;
    onClose: () => void;
    produto: Produto | null;
    estabelecimentoId: number;
}

const ModalFazerPedido: React.FC<ModalFazerPedidoProps> = ({ open, onClose, produto, estabelecimentoId }) => {
    const [quantidade, setQuantidade] = useState(1);

    const handleAdicionarAoCarrinho = () => {
        if (!produto) return;

        // Salva no LocalStorage usando nosso serviço novo
        carrinhoService.adicionarItem({
            id: produto.id,
            nome: produto.nome,
            preco: Number(produto.preco),
            quantidade: quantidade,
            imagemUrl: produto.imagemUrl || '',
            estabelecimentoId: estabelecimentoId
        });

        // Feedback simples
        alert("Produto adicionado ao carrinho!");
        
        // Limpa e fecha
        setQuantidade(1);
        onClose();
    };

    if (!produto) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle sx={{ fontWeight: 'bold' }}>Adicionar ao Carrinho</DialogTitle>
            
            <DialogContent>
                <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    
                    <Typography variant="h6" color="primary">
                        {produto.nome}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                        {produto.descricao}
                    </Typography>

                    <Typography fontWeight="bold">
                        Preço Unitário: R$ {Number(produto.preco).toFixed(2).replace('.', ',')}
                    </Typography>

                    {/* Apenas Input de Quantidade */}
                    <TextField
                        label="Quantidade"
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value)))}
                        InputProps={{ inputProps: { min: 1 } }}
                        fullWidth
                    />

                    <Box sx={{ bgcolor: '#f0f0f0', p: 2, borderRadius: 1, textAlign: 'right' }}>
                        <Typography variant="h6">
                            Subtotal: R$ {(Number(produto.preco) * quantidade).toFixed(2).replace('.', ',')}
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>

            <DialogActions sx={{ p: 2 }}>
                <Button onClick={onClose} color="inherit">
                    Cancelar
                </Button>
                <Button 
                    onClick={handleAdicionarAoCarrinho} 
                    variant="contained" 
                    color="primary"
                >
                    Adicionar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalFazerPedido;