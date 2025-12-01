import { Box, Typography, Container, Paper, Grid, styled } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, Link as MuiRouterLink } from 'react-router-dom'; // 🚨 Renomeei 'RouterLink' para 'MuiRouterLink' para evitar confusão de nomes
// 🚨 Importando o componente Carousel
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/layout/navbar/navbar';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom'; // 🚨 ESTA LINHA FOI REMOVIDA PARA EVITAR O CONFLITO. USAMOS AGORA O 'MuiRouterLink'
import Footer from '../../components/layout/footer/footer';
// ----------------------------------------------------------------------
// 1. DEFINIÇÃO DO COMPONENTE RatingStars (Avaliação)
// ----------------------------------------------------------------------
interface RatingProps {
  value: number;
  total?: number;
}

const RatingStars: React.FC<RatingProps> = ({ value, total = 5 }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    {Array.from({ length: total }).map((_, index) => {
      const isFilled = index < value;
      return isFilled ? (
        <StarIcon key={index} sx={{ color: '#FFD700', fontSize: '1rem' }} />
      ) : (
        <StarBorderIcon key={index} sx={{ color: '#FFD700', fontSize: '1rem' }} />
      );
    })}
  </Box>
);

// ----------------------------------------------------------------------
// 2. DADOS MOCK PARA O CARROSSEL (topProducts) - Adicionado 'id'
// ----------------------------------------------------------------------
const topProducts = [
  { id: 'rest_001', name: 'Gulliver', desc: 'Descrição...', logo: 'gulliver-logo.png', img: 'https://placehold.co/400x180/cc5555/white?text=Gulliver', rating: 5 },
  { id: 'rest_002', name: 'Tonho de Martinha', desc: 'Descrição...', logo: '', img: 'https://placehold.co/400x180/777777/white?text=Tonho', rating: 4 },
  { id: 'rest_003', name: 'Sal e Brasa', desc: 'Descrição...', logo: 'sal-brasa-logo.png', img: 'https://placehold.co/400x180/333333/white?text=Sal+e+Brasa', rating: 5 },
  { id: 'rest_004', name: 'Pizzaria Forno a Lenha', desc: 'Descrição...', logo: 'pizza-logo.png', img: 'https://placehold.co/400x180/dd8888/white?text=Pizza', rating: 5 },
  { id: 'rest_005', name: 'Mais Um Restaurante', desc: 'Detalhes aqui...', logo: '', img: 'https://placehold.co/400x180/aabbcc/white?text=Extra', rating: 3 },
  { id: 'rest_006', name: 'Último na Lista', desc: 'Final do carrossel.', logo: 'last-logo.png', img: 'https://placehold.co/400x180/ddeeff/white?text=Final', rating: 4 },
];

// ----------------------------------------------------------------------
// 3. DADOS MOCK PARA A LISTA VERTICAL - Adicionado 'id'
// ----------------------------------------------------------------------
const listProducts = [
  { id: 'prato_001', name: 'Prato de Carne', desc: 'Descrição...', img: 'https://placehold.co/80x80/999999/white?text=Carne' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },
  { id: 'prato_002', name: 'Feijoada', desc: 'Descrição...', img: 'https://placehold.co/80x80/666666/white?text=Feijoada' },

];

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


const Dashboardt = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

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
              {topProducts.map((product, index) => (
                // O Box aqui serve para encapsular o Paper e usar o itemClass do carrossel para espaçamento
                <Box key={index} sx={{ px: 1 ,}}> 
                  <Paper
                    elevation={3}
                    sx={{
                      height: 'auto', 
                      borderRadius: 1,
                      overflow: 'hidden',
                      cursor: 'pointer', // 🚨 Adicionado cursor pointer para indicar clicável
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)', // 🚨 Efeito visual ao passar o mouse
                      }
                    }}
                  >
                    {/* 🚨 ENVOLVENDO O CONTEÚDO DO CARD COM LINK */}
                    <MuiRouterLink to={`/restaurante/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Box sx={{ position: 'relative' }}>

                        {/* Imagem do Produto */}
                        <Box
                          component="img"
                          src={product.img} 
                          alt={product.name}
                          sx={{ width: '100%', height: 180, objectFit: 'cover' }}
                        />

                        {/* Detalhes do Card */}
                        <Box sx={{ p: 1.5 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>

                            {/* Logo (Posicionado sobre a imagem - ajuste necessário se usar position absolute) */}
                            {product.logo && (
                              <Box
                                component="img"
                                src={product.logo}
                                alt={`${product.name} Logo`}
                                sx={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: '20%',
                                  position: 'absolute',  
                                  boxShadow: 1,
                                  bgcolor: 'white' 
                                }}
                              />
                            )}

                            {/* Nome do Produto/Restaurante */}
                            <Typography variant="subtitle1" fontWeight="600" sx={{ ml: product.logo ? 4.5 : 0 }}>
                              {product.name}
                            </Typography>
                          </Box>

                          <Typography variant="body2" color="text.secondary">
                            {product.desc}
                          </Typography>

                          <Box sx={{ mt: 1 }}>
                            <RatingStars value={product.rating} />
                          </Box>
                        </Box>
                      </Box>
                    </MuiRouterLink> {/* 🚨 FIM DO LINK DO CARD */}
                  </Paper>
                </Box>
              ))}
            </Carousel>
          </Box> {/* FIM DO CARROSSEL DE CARDS */}


          {/* Linha Separadora após Seção 1 */}
          <Box sx={{ my: 4, borderBottom: '1px solid #cfcfcfff' }} />

          {/* Título da Seção 2 */}
          <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Veja mais
          </Typography>

          {/* ======================= 2. LISTA VERTICAL (listProducts) ======================= */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
            {listProducts.map((item, index) => (
              // 🚨 ITEM DA LISTA TAMBÉM É CLICÁVEL
              <MuiRouterLink 
                key={index} 
                to={`/restaurante/${item.id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pb: 1,
                    cursor: 'pointer', // 🚨 Adicionado cursor pointer
                    transition: 'opacity 0.2s',
                    '&:hover': {
                      opacity: 0.8, // 🚨 Efeito visual ao passar o mouse
                    },
                    borderBottom: index < listProducts.length - 1 ? '1px solid #cfcfcfff' : 'none'
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
            ))}
          </Box> {/* FIM DA LISTA VERTICAL (listProducts) */}

        </Paper>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Dashboardt;