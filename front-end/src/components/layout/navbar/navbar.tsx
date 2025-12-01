import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from '@mui/material';
import {useNavigate, Link as RouterLink} from 'react-router-dom';

import icon from '../../../assets/images/white-icon.png';
import { useAuth } from '../../../hooks/useAuth';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 25,
  backgroundColor:'white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f7f7f7ff',
  },
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '50%',

  [theme.breakpoints.up('sm')]: {
    marginLeft: '15%',
    marginRight: 'auto',
    width: '45%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { user, username, signOut } = useAuth(); // 1. Acessa o contexto de autenticação e a função signOut
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleMenuClose(); // Fecha o menu
    signOut(); // Executa o logout
    // O ideal é redirecionar o usuário para a página de login ou inicial
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* 2. Exibe o nome do usuário se ele estiver logado */}
      <MenuItem onClick={handleMenuClose}>Olá, {user?.nome}</MenuItem>
      <MenuItem onClick={handleMenuClose}>Minha Conta</MenuItem>
      <MenuItem onClick={handleLogout}>Sair</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex',
                backgroundColor: '#1b130f',
                height: '10vh',
                boxShadow: 3,
                pb: '7%',
                pt: '3%',
    }}>
      <Box sx={{display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%',
                mt: 'auto',
                pb: '40px',
                position: 'relative', // 🚨 CHAVE: Necessário para os filhos absolutos
              }}>
                
                {/* Ícone do site (mantido absoluto para não atrapalhar o layout) */}
                    <Link 
                        component={RouterLink}
                        to="/" 
                        style={{ textDecoration: 'none' }} 
                        sx={{ zIndex: 100, ml: { sm: 3, md: 4 } }} // Ajuste de margem esquerda
                    >
                        <Box
                            component="img"
                            src={icon}
                            alt="Ícone do Site"
                            sx={{
                                width: 150, 
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

            <Search sx={{ borderRadius: 25, mb: 'auto', mt: 'auto' }}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Pesquise seu restaurante"
                inputProps={{ 'sans-serif': 'search' }}
                />
            </Search>

            {/* ICONES DE PERFIL */}
            <Box 
                sx={{
                    zIndex: 100, mr: { sm: 3, md: 4 },
                    display: 'flex', // Permite que os ícones fiquem lado a lado
                    alignItems: 'center',
                }}
            >
                {/* Ícone de Perfil (Desktop MD) */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {/* Botões opcionais de Mail e Notificações podem ir aqui */}
                    
                    <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="secondary"
                    > 
                    <AccountCircle sx={{ fontSize: '2.5rem' }} />
                    </IconButton>
                </Box>

                {/* Ícone de Menu Móvel (Mobile XS) */}
                <Box sx={{ display: { xs: 'flex', md: 'none'} }}>
                    <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                   
                    >
                    <MoreIcon />
                    </IconButton>
                </Box>
            </Box>
            {/* Fim do Box Absoluto do Perfil */}
        
            {renderMobileMenu}
            {renderMenu}
        </Box>
    </Box>
  );
}