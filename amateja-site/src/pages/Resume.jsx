import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '@fontsource/merriweather';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import data from '../json/ResumeData.json';
import Contact from './resumeComponents/Contact';
import Education from './resumeComponents/Education';
import Skills from './resumeComponents/Skills';


const Resume = () => {
    console.log(Object.keys(data));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid container size={4}>
                    <Typography>
                        {data.leftPanel.title}
                    </Typography>
                    <Typography>
                        {data.leftPanel.subTitle}
                    </Typography>
                    <Box>
                        <Contact data={data.leftPanel.sections[0]} />
                        <Education data={data.leftPanel.sections[1]} />
                        <Skills data={data.leftPanel.sections[2]} />
                    </Box>
                </Grid>
                <Grid container size={8}>
                    
                </Grid>
            </Grid>
        </Box>
    );  
}

export default Resume;