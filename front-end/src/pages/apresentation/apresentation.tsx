import { useState } from 'react';
import { 
    Box, 
    Typography, 
    Link,
} from '@mui/material';

import {useNavigate, Link as RouterLink} from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import background from '../../assets/images/background.jpg';
import icon from '../../assets/images/orange-icon.png';
import thema from '../../assets/images/thema.png';
import Footer from '../../components/layout/footer/footer';


const Apresentation = () => {
    const { signIn, signed } = useAuth();
    const navigate = useNavigate();


    

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            
            <Box
                // Background estilização geral
                sx={{
                    flexGrow: 1,
                    backgroundColor: '#1c1c1c70',
                    backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.42),rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.99)), url(${background}) `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',

                    display: 'flex', 
                    flexDirection: 'column',
                    position: 'relative', 
                }}
            >

                {/*  */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 3, 
                        width: '100%',
                    }}
                >
                    {/* Ícone do site */}
                    <Link 
                        component={RouterLink}
                        to="/" 
                        style={{ textDecoration: 'none' }} 
                        sx={{ zIndex: 100, ml: { sm: 1, md: 3 } }} 
                    >
                        <Box
                            component="img"
                            src={icon}
                            alt="Ícone do Site"
                            sx={{
                                width: 150, 
                                boxShadow: 3, 
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 0.8,
                                    transform: 'scale(1.02)',
                                    transition: 'all 0.1s',
                                    color: 'primary.main',
                                }
                            }}
                        />
                    </Link>
                    
                    {/* Box de Navegação */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',

                            gap: { md: 4 },
                            mr: { md: 2 }
                        }}
                    >
                        {/* Cadastre sua empresa */}
                        <Link 
                            component={RouterLink}
                            to="/cadastro" 
                            variant="body1" 
                            sx={{ 
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold', 
                                color: 'white', 
                                textDecoration: 'none',
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 0.8,
                                    transform: 'scale(1.02)',
                                    transition: 'all 0.1s',
                                    color: 'primary.main',
                                } 
                            }}
                        >
                            Cadastre seu Restaurante
                        </Link>

                        {/* Restaurantes */}
                        <Link 
                            component={RouterLink}
                            to="/dashboardt" 
                            variant="body1" 
                            sx={{ 
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold', 
                                color: 'white', 
                                textDecoration: 'none',
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 0.8,
                                    transform: 'scale(1.02)',
                                    transition: 'all 0.1s',
                                    color: 'primary.main',
                                } 
                            }}
                        >
                            Restaurantes
                        </Link>

                        {/* Login */}
                        {/* Renderiza o botão de Login apenas se o usuário não estiver logado */}
                        {!signed && (
                            <Link 
                                component={RouterLink}
                                to="/login" 
                                variant="body1" 
                                sx={{ 
                                    fontFamily: 'sans-serif',
                                    fontWeight: 'bold', 
                                    color: 'white', 
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 0.8,
                                        transform: 'scale(1.02)',
                                        transition: 'all 0.1s',
                                        color: 'primary.main',
                                    }
                                }} >

                                Login

                            </Link>
                        )}
                    </Box>

                    {/* Tema do site  */}
                    <Box
                        component="img"
                        src={thema}
                        alt="mudar tema"
                        sx={{
                            width: 45, 
                            height: 40,
                            boxShadow: 3, 
                            cursor: 'pointer',
                            borderRadius: '25%', 
                            '&:hover': {
                                opacity: 0.8,
                                transform: 'scale(1.04)',
                                transition: 'all 0.1s',
                            },
                            mr: { md: 3 } 
                        }} />

                </Box>


                {/* CONTEÚDO PRINCIPAL (Texto) */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        paddingLeft: { xs: '5%', md: '8%' }, 
                        paddingBottom: '10%',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.1,
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                            maxWidth: { xs: '90%', md: '500px' } // Limita a largura do texto
                        }}>

                        TRANSFORME SEU NEGÓCIO COM

                        <Typography variant="h3" component="span" 
                            sx={{ color: 'primary.main', 
                            fontWeight:'bold',
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                            paddingLeft: '6px', 
                            }}
                        >CARDAPIU</Typography>
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            marginTop: 2,
                            color: 'white',
                            fontSize: { xs: '1.0rem', sm: '1.3rem', md: '1.6rem' },
                            fontWeight: '500',
                            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
                            maxWidth: { xs: '90%', md: '500px' } // Limita a largura do texto
                        }}
                    >
                        Vem ser nosso parceiro também!
                    </Typography>
                </Box>
                
            </Box>
            
        </Box>
        <Footer/>
        </Box>
        
    );
};

export default Apresentation;