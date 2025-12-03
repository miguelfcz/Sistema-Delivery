import { useState } from 'react';
import { 
    Box, 
    Button, 
    Container, 
    TextField, 
    Typography, 
    Paper, 
    Alert,
    Link 
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { cadastroService } from '../../services/authService';
import { useAuth } from '../../hooks/useAuth';

import chefbackground from '../../assets/images/chefbackground2.png';
import icon from '../../assets/images/orange-icon.png';
import thema from '../../assets/images/thema.png';
import Footer from '../../components/layout/footer/footer';



const Cadastro = () => {
    const { signIn } = useAuth();
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
        <Box>
        <Box
            // Background estilização geral
            sx={{
                minHeight: '100vh', 
                backgroundColor: '#1c1c1c70',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-end',
                backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.42),rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.99)), url(${chefbackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right'
            }}
        >
        {/* Ícone do site  */}
        <Link 
                href="/" 
                style={{ 
                    textDecoration: 'none', 
                    position: 'absolute',
                    top: '8%',
                    left: '6%',
                    zIndex: 100,
                    
                }} 
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

            {/* Thema do site  */}
            <Box
                component="img"
                src={thema}
                alt="mudar tema"
                sx={{
                    position: 'absolute',
                    top: '8%',
                    right: '6%',        
                    zIndex: 100,          

                    width: 45, 
                    height: 40,
                    boxShadow: 3, 
                    cursor: 'pointer',
                    borderRadius: '25%', 
                    '&:hover': {
                        opacity: 0.8,
                        transform: 'scale(1.04)',
                        transition: 'all 0.1s',
                    }
                }}
            />

                {/* Formulário de Login  */}
            <Container component="main" maxWidth="xs" >
                <Paper 
                    elevation={10} 
                    sx={{
                        backgroundColor: 'rgba(15, 15, 15, 0.28)',
                        backdropFilter: 'blur(10px)',
                        p: 4, 
                        width: '100%',
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        borderRadius: 2,
                    }}
                >
                    <Typography 
                        component="h1" 
                        variant="h4"
                        fontWeight="bold" 
                        sx={{ mb: 4,
                            color: 'primary.main'
                        }}
                    >
                        Cadastro
                    </Typography>

                    {/* Box de Nome  */}
                    <Box component="form" onSubmit={handleCadastro} noValidate sx={{ mt: 1, width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Nome"
                            name="nome"
                            autoComplete="nome"
                            value={nome}
                            InputLabelProps={{
                                required: false, 
                            }}
                            onChange={(e) => setNome(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 1,
                                },
                                '& .MuiInputBase-input': {
                                    color: '#000000',
                                }
                            }}
                        />

                     {/* Box de Email  */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            InputLabelProps={{
                                required: false, 
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 1,
                                },
                                '& .MuiInputBase-input': {
                                    color: '#000000',
                                }
                            }}
                        />
                        {/* Box de Senha  */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="senha"
                            label="Senha"
                            InputLabelProps={{
                                required: false, 
                            }}
                            type="password"
                            id="senha"
                            autoComplete="current-password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 1,
                                },
                                '& .MuiInputBase-input': {
                                    color: '#000000ff',
                                }
                            }}
                        />
                        {erro && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{erro}</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            disabled={loading}
                            sx={{ 
                                mt: 3, 
                                mb: 2,
                                py: 1.5,
                                color: 'white',
                                backgroundColor:'primary.main',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                },
                                '&.Mui-disabled': {
                                    backgroundColor: '#cccccc', 
                                    color: '#888888',           
                                }
                            }}
                        >
                            {loading ? 'Por Favor Aguarde...' : 'Criar Conta'}
                        </Button>
                    </Box>
                    
                    <Typography variant="body1" sx={{ mt: 2 , color: 'white' }}>
                        Você já tem uma conta? 
                        <Link href="/login" variant="body1" sx={{ ml: 0.5, fontWeight: 'bold' }}>
                            Clique Aqui 
                        </Link>
                    </Typography>
                </Paper>
            </Container>
        </Box>
        <Footer />
        </Box>
    );
};

export default Cadastro;