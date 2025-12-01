import { useState } from 'react';
import { 
    Box, 
    Typography, 
    Link,
    Container // Importação necessária para o Container, caso queira usá-lo depois
} from '@mui/material';

import {useNavigate, Link as RouterLink} from 'react-router-dom';
import { cadastroService } from '../../services/authService';
import { useAuth } from '../../hooks/useAuth';
import background from '../../assets/images/background.jpg';
import icon from '../../assets/images/orange-icon.png';
import thema from '../../assets/images/thema.png';
import Footer from '../../components/layout/footer/footer';


const Apresentation = () => {
    const { signIn, signed } = useAuth(); // 1. Pega o estado 'signed' do contexto
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCadastro = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');
        setLoading(true);
    
        try {
            const data = await cadastroService.cadastro(nome, email, senha);
            
            signIn(data.token);
            navigate('/dashboard'); 
    
        } catch (error: any) {
            const msg = error.response?.data?.message || 'Não foi possível cadastrar. Verifique seus dados.';
            setErro(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        // 1. Box Externo (Estrutura principal: Coluna)
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
            {/* 2. Box de Conteúdo (Background e Layout principal: Flex para Texto/Form) */}
            <Box
                // Background estilização geral
                sx={{
                    flexGrow: 1,
                    backgroundColor: '#1c1c1c70',
                    backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.42),rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.99)), url(${background}) `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',

                    // Flexbox de coluna para organizar Header e Conteúdo Verticalmente
                    display: 'flex', 
                    flexDirection: 'column',
                    position: 'relative', // Mantido para o tema
                }}
            >  

                {/* 🚨 NOVO: BOX DE HEADER FLEXÍVEL 🚨 */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 3, // Padding geral
                        width: '100%',
                    }}
                >
                    {/* Ícone do site (mantido absoluto para não atrapalhar o layout) */}
                    <Link 
                        component={RouterLink}
                        to="/" 
                        style={{ textDecoration: 'none' }} 
                        sx={{ zIndex: 100, ml: { sm: 1, md: 3 } }} // Ajuste de margem esquerda
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
                            gap: { xs: 1, sm: 2, md: 4 },
                            mr: { sm: 1, md: 2 }
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
                        {/* 2. Renderiza o botão de Login apenas se o usuário NÃO estiver logado */}
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
                                }}
                            >
                                Login
                            </Link>
                        )}
                    </Box>

                    {/* Thema do site (Mantido fora do fluxo de links mas posicionado pelo Flexbox) */}
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
                            // 🚨 Margem direita para afastar da borda
                            mr: { xs: 1, md: 3 } 
                        }}
                    />
                </Box>
                {/* Fim do Box de Header */}


                {/* CONTEÚDO PRINCIPAL (Texto) */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // Centraliza o texto verticalmente
                        // 🚨 Ajuste a margem/padding aqui para controlar o recuo
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
                        }}
                    >
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
            
            <Footer/>
        </Box>
    );
};

export default Apresentation;