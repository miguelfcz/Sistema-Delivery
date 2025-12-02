import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as MuiRouterLink } from 'react-router-dom';

import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/layout/navbar/navbar';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Footer from '../../components/layout/footer/footer';



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

const MOCK_PROFILE_URL = 'https://placehold.co/150x150/FF7F3A/FFFFFF?text=Logo'; 

const Restaurante = () => {
  const [profileImage, setProfileImage] = useState<string | null>(MOCK_PROFILE_URL);
    // Estado para referenciar o input de arquivo escondido
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    // Função que lida com a seleção da foto
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onloadend = () => {
                // Atualiza o estado com a URL temporária da nova imagem
                setProfileImage(reader.result as string);
                // Aqui você faria o upload da 'file' para sua API.
                console.log('Arquivo selecionado. Pronto para upload.');
            };
            
            reader.readAsDataURL(file);
        }
    };
    const handleClickUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };


    return(
        <Box sx={{ backgroundColor:'#ffffff'}}>
            <Navbar/>

            
            <Box>
                <Box sx={{ 
                    maxWidth: 1050, 
                    margin: '0 auto', 
                    display: 'flex', 
                    flexDirection: 'initial', 
                    alignItems: 'center', 
                    my: 4 
                }}>
                    {/* Foto de Perfil */}
                    <Box
                        sx={{
                            display: 'flex',
                            position: 'relative',
                            left: '15%',
                            transform: 'translateX(-50%)',
                            
                            // Tamanho da área da foto (Responsivo)
                            width: { xs: 120, sm: 150, md: 200 }, 
                            height: { xs: 120, sm: 150, md: 200 },
                            
                            borderRadius: '50%', 
                            overflow: 'hidden',
                            boxShadow: 3,
                            border: '4px solid #fff', 
                            
                            cursor: 'pointer',
                            bgcolor: '#ccc' // Fundo cinza se não tiver imagem
                        }}
                        onClick={handleClickUpload}
                    >
                        {/* 1. Imagem */}
                        {profileImage ? (
                            <Box
                                component="img"
                                src={profileImage}
                                alt="Foto de Perfil do Restaurante"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // Garante que a imagem cubra o círculo
                                }}
                            />
                        ) : (
                            <AccountCircleIcon 
                                sx={{ 
                                    fontSize: '100%', 
                                    width: '100%', 
                                    height: '100%', 
                                    color: '#666' 
                                }} 
                            />
                        )}
                        
                        {/* Botão de Upload */}
                        <IconButton
                            aria-label="Upload de foto de perfil"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                backgroundColor: 'primary.main',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                },
                                p: { xs: 0.5, md: 1 }
                            }}
                            onClick={(e) => {
                                e.stopPropagation(); // Previne que o evento do Box pai seja disparado duas vezes
                                handleClickUpload();
                            }}
                        >
                            
                        </IconButton>

                        {/* 3. Input de Arquivo Escondido */}
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </Box>
                    <Box sx={{ml: -8 ,position:'relative', left: '14%'}}>
                        <Typography sx={{ fontSize: { md: '2rem' }, fontWeight: 'bold', mt: 0, }} >
                            Nome do Restaurante
                        </Typography>
                        <Typography variant ='subtitle1'>
                            Endereço
                        </Typography>
                        <Typography variant ='subtitle1'>
                            CPNJ
                        </Typography>
                        <Typography variant ='subtitle1' >
                            Descrição.....
                        </Typography>
                    </Box>

                </Box>
                    {/* Linha Separadora */}
                    <Box sx={{ my: 6, borderBottom: '1px solid #cfcfcfff', maxWidth: 1050, margin: '0 auto'}} />
                </Box>

                <Paper elevation={1} sx={{ display:'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 900, margin: '0 auto', mt: 4, mb: 4, backgroundColor: '#f5f5f5',p: { xs: 2, md: 4 } }}>
                     
                    <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mb: 7 }}>
                                 Menu
                    </Typography>


            {/* LISTA VERTICAL (listProducts) */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '68vw', maxWidth: 850}}>
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
                    alignItems: 'inherit',
                    pb: 1,
                    cursor: 'pointer', 
                    transition: 'opacity 0.2s',
                    '&:hover': {
                      opacity: 0.8, 
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
                  

                  {/* Box refente ao valor dos itens */}
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto',  }}>
                    <Box 
                        sx={{ 
                            backgroundColor: '#616161ff', 
                            py: 0.5, 
                            px: 2, 
                            borderRadius: '999px',
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                        }}>

                        <Typography 
                            variant="body1"
                            color="#ffffff"
                            fontWeight="bold"
                        >
                            R$ {item.valor} 
                        </Typography>
                    </Box>
                </Box>        
           
                </Box>
              </MuiRouterLink>
            ))}
            </Box>     
                </Paper>
                <Footer/>
            </Box>

    );
};

export default Restaurante;