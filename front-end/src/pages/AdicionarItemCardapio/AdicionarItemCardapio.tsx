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

import api from '../../services/api'; // Correção: Importação padrão, sem chaves



const AdicionarItemCardapio = () => {
    const { user } = useAuth(); // Pega o usuário logado 
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
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

        if (!nome || !valor || !descricao || !profileImageFile) {
            setErro('Todos os campos são obrigatórios.');
            return;
        }

        if (!user?.restauranteId) {
            setErro('Você precisa estar associado a um restaurante para cadastrar um item.');
            return;
        }

        setLoading(true);

        // 1. Cria um objeto FormData para enviar arquivos e texto
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('descricao', descricao);
        // Converte o valor para número e formato adequado se necessário
        formData.append('preco', valor.replace(',', '.')); 
        formData.append('estabelecimentoId', user.restauranteId);
        formData.append('file', profileImageFile); // 'file' é um nome comum para o campo de imagem

        try {
            // 2. Envia a requisição para o backend
            // A URL '/produtos' é um exemplo, ajuste para a sua rota de criação de produto
            await api.post('/produtos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Item cadastrado com sucesso!');

            // Redireciona para o perfil do restaurante
            navigate(`/restaurante/${user.restauranteId}`); 

        } catch (error: any) {
            const msg = error.response?.data?.message || 'Não foi possível adicionar o Item.';
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
                        mb:'12rem',
                        maxWidth: 650,
                        maxHeight: 800,
                        margin: '0 auto',
                    }}
                >
                    <Typography 
                        component="h1" 
                        variant="h4"
                        fontWeight="bold" 
                        sx={{ mb: 3, color: 'primary.main' }}
                    >
                        Adicionar novo Item ao Cardápio
                    </Typography>

                    

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%'}}>

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
                            Clique no ícone para adicionar a foto do Item
                        </Typography>

                        

                    <Box sx={{ }}>            
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Nome"
                            name="nome"
                            autoFocus
                            value={nome}
                            InputLabelProps={{
                                required: false, 
                            }}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="valor"
                            label="Valor do Item"
                            name="valor"
                            value={valor}
                            InputLabelProps={{
                                required: false, 
                            }}
                            onChange={(e) => setValor(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="descricao"
                            label="Descrição do Item"
                            name="descricao"
                            multiline
                            rows={4}
                            value={descricao}
                            InputLabelProps={{
                                required: false, 
                            }}
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
                            {loading ? 'Adicionando...' : 'Adicionar Item'}
                        </Button>
                    </Box>

                    </Box>

                </Paper>
            </Container>
            <Footer />
        </Box>
    );
};

export default AdicionarItemCardapio;
