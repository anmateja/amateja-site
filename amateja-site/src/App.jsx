import AppHeader from './AppHeader';
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          component='main'
          sx={{
            width: '100vw',
            height: '100vh'
          }}
        >
          <AppHeader />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
