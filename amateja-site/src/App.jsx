import AppHeader from './AppHeader';
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

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
          <div>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/resume' element={<Resume/>}/>
            </Routes>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
