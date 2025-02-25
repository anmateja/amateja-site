import { useEffect } from 'react';
import AppHeader from './AppHeader';
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Home from './pages/Home/Home'
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  useEffect(() => emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY));
  
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box id='appStart' sx={{ height: '100%' }}>
          <AppHeader />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
