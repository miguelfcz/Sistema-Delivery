import { Box, Container, Typography, Link, Grid } from '@mui/material'; 
// ...

const Footer = () => {
  return (
    // 1. Box Principal: Define a cor e a largura total (100% da tela)
    <Box 
    
      component="footer" 
      sx={{
        bgcolor: '#161616ff', // Cor de fundo escura
        color: 'white', // Cor do texto principal
        py: 4, // Padding vertical (cima/baixo)
        mt: 'auto', // Opção para empurrar o rodapé para o final do layout
      }}
    >
      {/* 2. Container: Limita o conteúdo na largura máxima (mantém centralizado e legível) */}
      <Container maxWidth="lg">
        
        {/* 3. Grid: Usado para dispor links e colunas */}
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* Coluna 1: Informações da Empresa / Logo */}
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>

              Cardapiu

            </Typography>
            <Typography variant="body2" color="text.secondary">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </Typography>
          </Grid>

          {/* Coluna 2: Links Rápidos */}
          <Grid item xs={6} sm={4} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Links Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <Link href="/restaurantes" color="inherit" underline="hover">Restaurantes</Link>
              <Link href="/sobre" color="inherit" underline="hover">Cadastre seu Restaurante</Link>
              <Link href="/contato" color="inherit" underline="hover">Contato</Link>
            </Box>
          </Grid>

          {/* Coluna 3: Redes Sociais / Contato */}
          <Grid item xs={6} sm={4} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Siga-nos
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link href="#" color="inherit" underline="none"> {/* Ícone 1 */} Facebook </Link>
              <Link href="#" color="inherit" underline="none"> {/* Ícone 2 */} Instagram </Link>
            </Box>
          </Grid>

        </Grid>
        
        {/* Linha Divisória */}
        <Box sx={{ pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            Desenvolvido com 💙 e React/MUI.
          </Typography>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Footer;