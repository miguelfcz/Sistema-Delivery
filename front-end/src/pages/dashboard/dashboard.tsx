import { Box, Typography, Paper} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link as MuiRouterLink } from 'react-router-dom';
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';

import Navbar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import RestauranteCard from '../../components/RestauranteCard/restauranteCard';
import { estabelecimentoService, type Estabelecimento } from '../../services/estabelecimentoService';

// ----------------------------------------------------------------------
// 1. DEFINIÇÃO DO COMPONENTE RatingStars (Avaliação)
// ----------------------------------------------------------------------
interface RatingProps {
  value: number;
  total?: number;
}

// ----------------------------------------------------------------------
// 4. CONFIGURAÇÃO DE RESPONSIVIDADE DO CARROSSEL
// ----------------------------------------------------------------------
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    partialVisibilityGutter: 20 // Espaçamento entre itens
  },
  laptop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
    partialVisibilityGutter: 20
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    partialVisibilityGutter: 20
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 20
  }
};



const Dashboard = () => {
  const navigate = useNavigate();
  const [restaurantes, setRestaurantes] = useState<Estabelecimento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRestaurantes = async () => {
      try {
        setLoading(true);
        const data = await estabelecimentoService.listarTodos();
        // A API retorna um array de objetos que correspondem à interface Estabelecimento
        setRestaurantes(data); 
      } catch (err) {
        setError('Não foi possível carregar os restaurantes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantes();
  }, []);

  const destaques = restaurantes.slice(0, 7);
  const maisRestaurantes = restaurantes.slice(7);

  const getImageUrl = (url: string | undefined | null) => {
    if (!url) return null;

    return url.startsWith('http') ? url : `http://localhost:3000${url}`;
  };

  return (
    <Box>
      <Navbar />
      {/* Container principal (simulando o fundo cinza claro) */}
      <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>

        {/* Área de Conteúdo PRINCIPAL (Simulando o fundo branco centralizado) */}
        <Paper elevation={1} sx={{ maxWidth: 1200, margin: '0 auto', backgroundColor: '#1b130f0a',p: { xs: 2, md: 4 } }}>

          {/* Título da Seção 1 */}
          <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Destaques do Dia
          </Typography>

          {/* ======================= 1. CARROSSEL DE CARDS (topProducts) ======================= */}
          <Box sx={{ mb: 4}}>
            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              autoPlay={false}
              keyBoardControl={true}
              // Define o espaçamento entre os itens. O valor 20 (px) está no responsive.
              containerClass="carousel-container" 
              itemClass="carousel-item-padding-40-px" 
            >
              {destaques.map((restaurante) => (
                <RestauranteCard
                  key={restaurante.id}
                  id={restaurante.id}
                  nome={restaurante.nome}
                  endereco={restaurante.endereco}
                  descricao={restaurante.descricao}
                  capaUrl={getImageUrl(restaurante.capaUrl)}
                  onCardClick={(id) => navigate(`/restaurante/${id}`)}
                  
                />
              ))}
            </Carousel>
          </Box> {/* Fim do carrosel */}

          {loading && <Typography>Carregando restaurantes...</Typography>}
          {error && <Typography color="error">{error}</Typography>}

          {/* Linha Separadora  */}
          <Box sx={{ my: 4, borderBottom: '1px solid #cfcfcfff' }} />

          {/* Título */}
          <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Veja mais
          </Typography>

          {/* 2. Lista Vertical (listProducts) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
            {restaurantes.map((restaurante, index) => (
              
              <MuiRouterLink 
                key={index} 
                to={`/restaurante/${encodeURIComponent(restaurante.id)}`} 
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
                    borderBottom: index < restaurantes.length - 1 ? '1px solid #cfcfcfff' : 'none'
                  }}
                >
                  {/* Imagem do Item da Lista */}
                  <Box
                    component="img"
                    src={getImageUrl(restaurante.capaUrl) || 'https://placehold.co/80x80/eeeeee/cccccc?text=Sem+Foto'}
                    alt={restaurante.nome}
                    sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, mr: 2 }}
                  />

                  {/* Detalhes da Lista */}
                  <Box>
                    <Typography variant="h6" fontWeight="600" sx={{ mb: 0.5 }}>
                      {restaurante.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {restaurante.endereco || 'Sem descrição disponível.'}
                    </Typography>
                  </Box>
                </Box>
              </MuiRouterLink>
            ))}
          </Box> {/* Fim da lista vertical (listProducts) */}

        </Paper>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Dashboard;