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
        <Grid container spacing={0} justifyContent="center" textAlign="center">
          <Grid 
              item 
              xs={12} 
              sm={4} 
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
                <Typography variant="h6" gutterBottom fontWeight={'bold'}>
                  Cardapiu
                </Typography>

                <Typography variant="body2" color="white">
                  &copy; {new Date().getFullYear()} Todos os direitos reservados.
                </Typography>
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