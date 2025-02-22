import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import photo from './assets/AsterMateja.jpg'
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';


const pages = ['Home', 'Resume', 'Portfolio', 'About', 'Contact'];

const AppHeader = () => {
    const navigate = useNavigate();
    const handleClick = (page) => {       
        if(page == 'Home') {
            navigate('/');
        } else {
            navigate('/'+page.toLowerCase());
        }    
    };
    return (
        <>
            <CssBaseline />
            <Box sx={{flexGrow: 1}}>
                <AppBar position='static'>
                    <Container maxWidth='false'>
                        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Tooltip title='Go Home'>
                                    <IconButton onClick={() => handleClick('Home')}>
                                        <Avatar alt='Aster Mateja' src={photo} />
                                    </IconButton>
                                </Tooltip>
                                <Typography variant='h5' noWrap>
                                    ASTER MATEJA
                                </Typography>
                            </Box>
                            <Box>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => handleClick(page)}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    )
}

export default AppHeader