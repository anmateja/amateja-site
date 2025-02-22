import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import background from '../assets/coffee-shop-interior_blurred.jpg';
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
      <Typography 
          variant='h1'
          align='center'
          color='black'
          sx={{
              fontFamily: 'Dancing Script, cursive',
          }}
      >
          Aster Mateja
      </Typography>
      <Typography
          variant='h2'
          align='center'
          color='black'
          sx={{
              fontFamily: 'Courier Prime'
          }}
      >
          software engineer
      </Typography>
    </Box>
  );
};

export default Home;