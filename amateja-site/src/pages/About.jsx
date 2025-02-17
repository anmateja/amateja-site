import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid2';
import '@fontsource/dancing-script';
import '@fontsource/merriweather';
import photo from '../assets/AsterMatejaNoBackground.png';

const About = () => {
    return (
        <Box 
            sx={{ flexGrow: 1, 
                marginTop: '8px',
                minHeight: '100vh'
            }}
        >
            <Grid container spacing={1.5}>
                <Grid size={2} ></Grid>
                <Grid size={8} >
                    <Typography
                        variant='h1'
                        align='center'
                        sx={{
                            fontFamily: 'Dancing Script, cursive',
                        }}
                    >
                        About Me
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid size={9}>
                            <Typography
                                sx={{
                                    fontFamily: 'Merriweather'
                                }}
                            >
                                Well met! My name is Aster Mateja and I am a front-end software engineer with a passion for building sleek, user-friendly web applications. My main expertise is in JavaScript and React, where I focus on crafting smooth, responsive interfaces that enhance user experience built on clean and often times reusable code. Whether it's developing interactive components, optimizing performance, or ensuring pixel-perfect design implementation, I love turning ideas into functional, beautiful websites.
                                <br/><br/>
                                When I’m not coding, you’ll probably find me writing or gaming. I enjoy creating stories—whether through words or immersive digital worlds. Whether it's diving into a new RPG, exploring vast and fantastical new worlds, or just enjoying new narratives, I love the creativity and problem-solving that both writing and gaming bring to my life.
                            </Typography>
                        </Grid>
                        <Grid size={3}>
                            <Box sx={{maxWidth: '100%', maxHeight: '100%'}}>
                                <img src={photo} alt="Photo of Aster Mateja" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                            </Box>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid size={2}></Grid>
            </Grid>
            
        </Box>
    )
};

export default About;