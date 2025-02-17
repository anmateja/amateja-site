import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import '@fontsource/merriweather';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import data from '../json/ResumeData.json';
import Contact from './ResumeComponents/Contact';
import Education from './ResumeComponents/Education';
import Skills from './ResumeComponents/Skills';
import Experience from './ResumeComponents/Experience';


const Resume = () => {
    const rpKeys = Object.keys(data.rightPanel.sections);

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1, marginTop: '8px'}}>
                <Grid container spacing={1} sx={{marginBottom: '8px'}}>
                    <Grid container size={3}>
                        <Box sx={{margin: '8px'}}>
                            <Typography 
                                variant='h4'
                                sx={{
                                    fontFamily: 'Merriweather'
                                }}
                            >
                                {data.leftPanel.title}
                            </Typography>
                            <Typography variant='h5'>
                                {data.leftPanel.subTitle}
                            </Typography>
                            <Box>
                                <Contact data={data.leftPanel.sections[0]} />
                                <Education data={data.leftPanel.sections[1]} />
                                <Skills data={data.leftPanel.sections[2]} />
                            </Box>
                        </Box> 
                    </Grid>
                    <Grid container size={9}>
                        <Box sx={{margin: '8px'}}>
                            <Box> 
                                <Typography 
                                    variant='h6'
                                    sx={{
                                        fontFamily: 'Merriweather',
                                        borderBottom: 'solid',
                                        borderBottomColor: 'white'
                                    }}>
                                    {rpKeys[0].toUpperCase()}
                                </Typography>
                                <Typography sx={{marginTop: '8px', marginBottom: '8px'}}>
                                    {data.rightPanel.sections.objective}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography 
                                    variant='h6'
                                    sx={{
                                        fontFamily: 'Merriweather',
                                        borderBottom: 'solid',
                                        borderBottomColor: 'white'
                                    }}>
                                    {rpKeys[1].toUpperCase()}
                                </Typography>
                                {data.rightPanel.sections.experience.map((exp, index) => {
                                    return (
                                        <Experience key={exp.title+'_'+index} data={exp} />
                                    );
                                })}
                            </Box>
                            <Box>
                                <Typography 
                                    variant='h6'
                                    sx={{
                                        fontFamily: 'Merriweather',
                                        borderBottom: 'solid',
                                        borderBottomColor: 'white'
                                    }}>
                                    {rpKeys[2].toUpperCase()}
                                </Typography>
                                <Experience data={data.rightPanel.sections.leadership[0]} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <AppBar position="sticky" sx={{ top: 'auto', bottom: 0 }}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px'}}>
                        <Typography>
                            Want to download this resume?{" "}
                            <Button 
                                variant="contained" 
                                size='small'
                                href='https://docs.google.com/document/d/1qve9fpAZ5AN20ZD0FgX0PeYGiFqLgR8qqxHQ8AYcobM/edit?usp=sharing'
                                rel="noopener" 
                                target="_blank"
                            >
                                GO HERE
                            </Button>
                            {" "}to download from google docs!
                        </Typography>
                    </Box>
            </AppBar>
        </React.Fragment>
    );  
}

export default Resume;