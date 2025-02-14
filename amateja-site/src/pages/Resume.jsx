import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '@fontsource/merriweather';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import data from '../json/ResumeData.json';
import Contact from './resumeComponents/Contact';
import Education from './resumeComponents/Education';
import Skills from './resumeComponents/Skills';
import Experience from './resumeComponents/Experience';


const Resume = () => {
    const rpKeys = Object.keys(data.rightPanel.sections);

    return (
        <Box sx={{ flexGrow: 1, marginTop: '8px', marginBottom: '8px'}}>
            <Grid container spacing={1}>
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
    );  
}

export default Resume;