import Footer from '../../components/layout/footer/footer';
import Navbar from '../../components/layout/navbar/navbar';
import Paper from '@mui/material/Paper';
import { Link as MuiRouterLink, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, CircularProgress } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import 'react-multi-carousel/lib/styles.css'; // 💡 Importação necessária
import { estabelecimentoService } from '../../services/estabelecimentoService';
import type { Estabelecimento as EstabelecimentoType } from '../../services/estabelecimentoService';

// 1. Definir a URL base da sua API
const API_BASE_URL = 'http://localhost:3000';

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    
    // 2. Criar uma função para montar a URL completa da imagem
    const getImageUrl = (url: string | null | undefined) => {
        if (!url) return 'https://placehold.co/80x80/eeeeee/cccccc?text=Sem+Imagem';
        if (url.startsWith('http')) return url;
        return `${API_BASE_URL}${url}`;
    };
    
    const [estabelecimentos, setEstabelecimentos] = useState<EstabelecimentoType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEstabelecimentos = async () => {
            try {
                const data = await estabelecimentoService.listarTodos();
                setEstabelecimentos(data);
            } catch (error) {
                console.error("Erro ao buscar estabelecimentos:", error);
                // Opcional: mostrar um alerta para o usuário
            } finally {
                setLoading(false);
            }
        };

        fetchEstabelecimentos();
    }, []);
    
    //  FILTRA OS RESTAURANTES 
    const filteredEstabelecimentos = estabelecimentos.filter(estab =>
        estab.nome.toLowerCase().includes(query.toLowerCase())
    );

    // Componente reutilizável para renderizar a lista de estabelecimentos
    const renderEstabelecimentoList = (list: EstabelecimentoType[]) => {
        if (list.length === 0) {
            return (
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                    Nenhum restaurante encontrado.
                </Typography>
            );
        }

        return list.map((item, index) => (
            <MuiRouterLink
                key={item.id} // Usar o ID do estabelecimento
                to={`/restaurante/${item.id}`} // Link correto para o perfil
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
                        borderBottom: index < list.length - 1 ? '1px solid #cfcfcfff' : 'none',
                        // 💡 Adicionado espaço inferior para melhor visualização
                        mb: index < list.length - 1 ? 2 : 0 
                    }}
                >
                    {/* Imagem do Restaurante */}
                    <Box
                        component="img"
                        // 💡 Usar a capaUrl ou uma imagem placeholder
                        src={getImageUrl(item.capaUrl)} // 3. Usar a função para obter a URL correta
                        alt={`Capa do ${item.nome}`}
                        sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, mr: 2 }}
                    />

                    {/* Detalhes do Restaurante */}
                    <Box>
                        <Typography variant="h6" fontWeight="600" sx={{ mb: 0.5 }}>
                            {item.nome} 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.descricao || item.endereco}
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
                    {query ? `Resultados para "${query}"` : 'Todos os Restaurantes'} 
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '68vw', maxWidth: 850 }}>
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        renderEstabelecimentoList(filteredEstabelecimentos)
                    )}
                </Box>
            </Paper>
            <Footer />
        </Box>
    );
};

export default Search;