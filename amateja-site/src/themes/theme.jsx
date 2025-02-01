import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7e57c2',
    },
    secondary: {
      main: '#26a69a',
    },
  },
  components: {
    MuiTypography: {
        styleOverrides: {
            root: {
                marginLeft: '1rem',
                marginRight: '1rem'
            }
        }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0
        }
      }
    }
  },
});

export default theme;