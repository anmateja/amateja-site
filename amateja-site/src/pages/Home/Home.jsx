import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import theme from '../../themes/theme';
import background from '../assets/codeBg.jpg';
import '@fontsource/dancing-script';
import '@fontsource/courier-prime';


function Home() {
  return (
    <Box
      sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: 'calc(100%  - 64px)'
      }}
    >
      <Grid container spacing={1} sx={{height: '100%', width: '100%'}}>
        <Grid size={3}></Grid>
        <Grid 
          size={6} 
          sx={{backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography 
            variant='h1'
            align='center'
            sx={{
                fontFamily: 'Dancing Script, cursive',
            }}
          >
            Aster Mateja
          </Typography>
          <Typography
            variant='h2'
            align='center'
            sx={{
                fontFamily: 'Courier Prime'
            }}
          >
            software engineer
        </Typography>
        </Grid>
        <Grid size={3}></Grid>
      </Grid>
    </Box>
  );
};

export default Home;