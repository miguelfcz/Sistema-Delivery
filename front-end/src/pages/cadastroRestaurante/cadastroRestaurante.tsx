import React, { useState } from 'react';
import { 
    Box, 
    Button, 
    Container, 
    TextField, 
    Typography, 
    Paper,
    Alert,
    IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../hooks/useAuth';
import Navbar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';



const CadastroRestaurante = () => {
    const { user } = useAuth(); // Pega o usuário logado 
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [descricao, setDescricao] = useState('');
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);
    
    // --- LÓGICA PARA UPLOAD DA IMAGEM ---
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onloadend = () => {
                // URL para preview da imagem
                setProfileImage(reader.result as string);
                // Arquivo para ser enviado para a API
                setProfileImageFile(file);
            };
            
            reader.readAsDataURL(file);
        }
    };

    const handleClickUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    // --- FIM DA LÓGICA DE UPLOAD ---

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');

        if (!nome || !endereco || !cnpj || !descricao) {
            setErro('Todos os campos são obrigatórios.');
            return;
        }

        if (!user) {
            setErro('Você precisa estar logado para cadastrar um restaurante.');
            return;
        }

        setLoading(true);

        try {
           
            console.log('Dados que seriam enviados para a API:',  { nome, 
                                                                    endereco, 
                                                                    cnpj,         // Aqui foi feita a associação usuário --> Restaurante
                                                                    descricao, 
                                                                    userId: user.id, 
                                                                    foto: profileImageFile }); 
            alert('Restaurante cadastrado com sucesso!');

            // Redireciona para o dashboard ou para a página do novo restaurante
            navigate('/restaurante'); 

        } catch (error: any) {
            const msg = error.response?.data?.message || 'Não foi possível cadastrar o restaurante.';
            setErro(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Navbar />
            <Container component="main" maxWidth="md" sx={{ my: 4 }}>
                <Paper 
                    elevation={3}
                    sx={{
                        p: { xs: 2, md: 4 },
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        mb:'12rem'
                    }}
                >
                    <Typography 
                        component="h1" 
                        variant="h4"
                        fontWeight="bold" 
                        sx={{ mb: 3, color: 'primary.main' }}
                    >
                        Cadastrar Novo Restaurante
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
                        
                        {/* --- CAMPO DE UPLOAD DE FOTO --- */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: 150,
                                    height: 150,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    boxShadow: 3,
                                    border: '4px solid #fff',
                                    cursor: 'pointer',
                                    bgcolor: '#ccc',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onClick={handleClickUpload}
                            >
                                {profileImage ? (
                                    <Box
                                        component="img"
                                        src={profileImage}
                                        alt="Preview da foto de perfil"
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <AccountCircleIcon sx={{ fontSize: '100%', color: '#666' }} />
                                )}
                                
                                <IconButton
                                    aria-label="Upload de foto de perfil"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        '&:hover': { backgroundColor: 'primary.dark' },
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClickUpload();
                                    }}
                                >
                                    
                                </IconButton>

                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                            </Box>
                        </Box>
                        <Typography variant="caption" display="block" textAlign="center" color="text.secondary" sx={{ mb: 2 }}>
                            Clique no ícone para adicionar a foto do restaurante
                        </Typography>
                        {/* --- FIM DO CAMPO DE UPLOAD --- */}


                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Nome do Restaurante"
                            name="nome"
                            autoFocus
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="endereco"
                            label="Endereço"
                            name="endereco"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="cnpj"
                            label="CNPJ"
                            name="cnpj"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="descricao"
                            label="Descrição do Restaurante"
                            name="descricao"
                            multiline
                            rows={4}
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        {erro && <Alert severity="error" sx={{ width: '100%', mt: 2 }}>{erro}</Alert>}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            disabled={loading}
                            sx={{ mt: 3, mb: 2, py: 1.5 }}
                        >   
                            {loading ? 'Cadastrando...' : 'Cadastrar Restaurante'}
                        </Button>
                    </Box>
                </Paper>
            </Container>
            <Footer />
        </Box>
    );
};

export default CadastroRestaurante;
