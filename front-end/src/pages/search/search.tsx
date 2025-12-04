import Footer from '../../components/layout/footer/footer';
import Navbar from '../../components/layout/navbar/navbar';
import Paper from '@mui/material/Paper';
import { Link as MuiRouterLink, useSearchParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import 'react-multi-carousel/lib/styles.css';





const listProducts = [
  { id: 'prato_001', name: 'Prato de Carne', desc: 'Descrição...', valor: '99,90' ,img: 'https://placehold.co/80x80/999999/white?text=Carne' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', valor: '38,90' ,img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_001', name: 'Prato de Carne', desc: 'Descrição...', valor: '99,90' ,img: 'https://placehold.co/80x80/999999/white?text=Carne' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', valor: '38,90' ,img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_001', name: 'Prato de Carne', desc: 'Descrição...', valor: '99,90' ,img: 'https://placehold.co/80x80/999999/white?text=Carne' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', valor: '38,90' ,img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_001', name: 'Prato de Carne', desc: 'Descrição...', valor: '99,90' ,img: 'https://placehold.co/80x80/999999/white?text=Carne' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', valor: '38,90' ,img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_001', name: 'Prato de Carne', desc: 'Descrição...', valor: '99,90' ,img: 'https://placehold.co/80x80/999999/white?text=Carne' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', valor: '38,90' ,img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_001', name: 'Prato de Carne', desc: 'Descrição...', valor: '99,90' ,img: 'https://placehold.co/80x80/999999/white?text=Carne' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', valor: '38,90' ,img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },

];

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [produtos, setProdutos] = useState<Produto[]>([]);

    // Filtra os produtos que correspondem à busca (ignorando maiúsculas/minúsculas)
    const matchedProducts = listProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    // Filtra o restante dos produtos
    const otherProducts = listProducts.filter(product =>
        !product.name.toLowerCase().includes(query.toLowerCase())
    );

    // Componente reutilizável para renderizar a lista de produtos
    const renderProductList = (products: typeof listProducts) => {
        if (products.length === 0) {
            return null; // Não renderiza nada se a lista estiver vazia
        }

        return products.map((item, index) => (
            <MuiRouterLink
                key={`${item.id}-${index}`} // Chave mais robusta
                to={`/restaurante/${item.id}`}
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
                        borderBottom: index < products.length - 1 ? '1px solid #cfcfcfff' : 'none'
                    }}
                >
                    {/* Imagem do Item da Lista */}
                    <Box
                        component="img"
                        src={item.img}
                        alt={item.name}
                        sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, mr: 2 }}
                    />

                    {/* Detalhes da Lista */}
                    <Box>
                        <Typography variant="h6" fontWeight="600" sx={{ mb: 0.5 }}>
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.desc}
                        </Typography>
                    </Box>
                </Box>
            </MuiRouterLink>
        ));
    };

    return (
        <Box>
            <Navbar />
            <Paper elevation={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 900, margin: '0 auto', mt: 4, mb: 4, backgroundColor: '#f5f5f5', p: { xs: 2, md: 4 } }}>
                <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mb: 7 }}>
                    {query ? `Resultados para "${query}"` : 'Todos os Itens'}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '68vw', maxWidth: 850 }}>
                    {/* Renderiza os produtos que correspondem à busca */}
                    {renderProductList(matchedProducts)}

                    {/* Adiciona um separador se ambas as listas tiverem itens */}
                    {matchedProducts.length > 0 && otherProducts.length > 0 && (
                        <Box sx={{ my: 2, borderBottom: '2px solid #cccccc' }}>
                            <Typography variant="caption" color="text.secondary" sx={{ position: 'relative', top: '10px', backgroundColor: '#f5f5f5', px: 1 }}>
                                Outros itens
                            </Typography>
                        </Box>
                    )}

                    {/* Renderiza os outros produtos */}
                    {renderProductList(otherProducts)}
                </Box>
            </Paper>
            <Footer />
        </Box>
    );

};

export default Search;