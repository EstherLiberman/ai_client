import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0B55',
      light: '#FFDEDE',
      dark: '#CF0F47',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#F5F5F5',
      contrastText: '#000000',
    },
    background: {
      default: '#FFDEDE',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#CF0F47',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          padding: '8px 24px',
        },
      },
    },
    
    components: {
  MuiPaper: {
    styleOverrides: {
      root: {
        background: 'radial-gradient(circle, #FFFFFF 60%, #FFDEDE 100%)',
        boxShadow: '0 0 300px #FFDEDE',
      },
    },
  },
}

  },
});

export default customTheme;

