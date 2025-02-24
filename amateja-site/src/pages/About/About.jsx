import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid2';
import '@fontsource/dancing-script';
import '@fontsource/merriweather';
import photo from '../assets/AsterMatejaNoBackground.png';
import theme from '../../themes/theme';
import background from '../assets/codeBg.jpg';

const About = () => {
    return (
        <Box 
            sx={{ flexGrow: 1, 
                height: 'calc(100%  - 72px)',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <Grid container spacing={1.5} sx={{height: '100%'}}>
                <Grid size={2} ></Grid>
                <Grid size={8} sx={{backgroundColor: theme.palette.background.default}}>
                    <Typography
                        variant='h1'
                        align='center'
                        sx={{
                            fontFamily: 'Dancing Script, cursive',
                        }}
                    >
                        About Me
                    </Typography>
                    
                    <Typography
                        sx={{
                            fontFamily: 'Merriweather'
                        }}
                    >
                        Well met! My name is Aster Mateja and I am a front-end software engineer with a passion for building sleek, user-friendly web applications. My main expertise is in JavaScript and React, where I focus on crafting smooth, responsive interfaces that enhance user experience built on clean and often times reusable code. Whether it&apos;s developing interactive components, optimizing performance, or ensuring pixel-perfect design implementation, I love turning ideas into functional, beautiful websites.
                        <br/><br/>
                        When I’m not coding, you’ll probably find me writing or gaming. I enjoy creating stories—whether through words or immersive digital worlds. Whether it&apos;s diving into a new RPG, exploring vast and fantastical new worlds, or just enjoying new narratives, I love the creativity and problem-solving that both writing and gaming bring to my life.
                    </Typography>

                    <Box sx={{alignContent: 'center', paddingTop: '8px'}}>
                        <img src={photo} alt="Photo of Aster Mateja" style={{width: '100%', maxHeight: '350px', objectFit: 'contain'}} />
                    </Box>

                    
                </Grid>
                <Grid size={2}></Grid>
            </Grid>
            
        </Box>
    )
};

export default About;