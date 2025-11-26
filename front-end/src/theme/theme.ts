import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#f3861b',
      },
      secondary: {
        main: '#f4f3ee',
      },
      background: {
        default: '#F4F6F8',
        paper: '#FFFFFF',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontSize: '2rem', fontWeight: 600 },
      h2: { fontSize: '1.5rem', fontWeight: 500 },
    },
  },
  ptBR,
);

export default theme;