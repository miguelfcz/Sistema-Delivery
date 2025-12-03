import React, { useState, useRef, useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

const AdicionarItemCardapio = () => {
    const { user } = useAuth();
    // 1. Pegamos o ID do restaurante direto da URL para garantir consistência
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    const [restaurante, setRestaurante] = useState<any>(null);

    const userId = user?.usuarioId ? Number(user.usuarioId) : (user as any)?.id ? Number((user as any).id) : null;
    const donoId = restaurante?.usuarioId ? Number(restaurante.usuarioId) : null;
    const isDono = userId !== null && Number(id) === donoId;


    
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);
    
    // Estados da Imagem
    const [profileImage, setProfileImage] = useState<string | null>(null); // Preview
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null); // Arquivo real
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');

        if (!nome || !valor || !descricao) {
            setErro('Preencha os campos obrigatórios (Nome, Valor, Descrição).');
            return;
        }

        if (!id) {
            setErro('Erro: ID do restaurante não identificado.');
            return;
        }

        setLoading(true);

        try {
            let imagemUrlFinal = '';

            // --- PASSO 1: UPLOAD DA IMAGEM (Se houver) ---
            if (profileImageFile) {
                const formData = new FormData();
                formData.append('file', profileImageFile);

                // Envia para a rota dedicada de upload
                const uploadResponse = await api.post('/upload', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                
                // O back retorna algo como: { url: "/uploads/nome-do-arquivo.png" }
                imagemUrlFinal = uploadResponse.data.url;
            }

            // --- PASSO 2: CRIAÇÃO DO PRODUTO (JSON) ---
            const produtoPayload = {
                nome,
                descricao,
                preco: parseFloat(valor.replace(',', '.')),
                estabelecimentoId: Number(id),
                imagemUrl: imagemUrlFinal
            };

            await api.post('/produtos', produtoPayload);

            alert('Item cadastrado com sucesso!');
            navigate(`/restaurante/${id}`); 

        } catch (error: any) {
            console.error(error);
            const msg = error.response?.data?.message || 'Erro ao adicionar o Item.';
            setErro(msg);
        } finally {
            setLoading(false);
        }  
    };

    
    
    useEffect(() => {
        const fetchRestaurante = async () => {
            try {
                const data = await api.get(`/estabelecimentos/${id}`);
                setRestaurante(data.data);

                const donoId = Number(data.data.usuarioId);
                if (Number(userId) !== donoId) {
                    alert("Você não tem permissão para acessar esta página.");
                    navigate(`/restaurante/${id}`);
                }
            } catch (err) {
                console.error(err);
                alert("Restaurante não encontrado.");
                navigate("/");
            }
        };

        fetchRestaurante();
    }, [id]);

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
                        maxWidth: 650,
                        margin: '0 auto',
                        mb: 10
                    }}
                >
                    <Typography component="h1" variant="h4" fontWeight="bold" sx={{ mb: 3, color: 'primary.main' }}>
                        Adicionar novo Item
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%'}}>

                        {/* Área de Upload */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Box
                                sx={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: '8px',
                                    border: '2px dashed #ccc',
                                    cursor: 'pointer',
                                    bgcolor: '#eee',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                                onClick={handleClickUpload}
                            >
                                {profileImage ? (
                                    <Box
                                        component="img"
                                        src={profileImage}
                                        alt="Preview"
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <Box sx={{ textAlign: 'center' }}>
                                        <AccountCircleIcon sx={{ fontSize: 40, color: '#999' }} />
                                        <Typography variant="caption" display="block" color="text.secondary">
                                            Foto do Prato
                                        </Typography>
                                    </Box>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                            </Box>
                        </Box>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Nome do Prato"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="valor"
                            label="Preço (R$)"
                            placeholder="0,00"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="descricao"
                            label="Descrição"
                            multiline
                            rows={3}
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        {erro && <Alert severity="error" sx={{ mt: 2 }}>{erro}</Alert>}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            disabled={loading}
                            sx={{ mt: 3, mb: 2 }}
                        >   
                            {loading ? 'Salvando...' : 'Adicionar Item'}
                        </Button>
                    </Box>
                </Paper>
            </Container>
            <Footer />
        </Box>
    );
};

export default AdicionarItemCardapio;