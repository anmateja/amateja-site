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
    const rpKeys = Object.keys(data.rightPanel.sections);

    const Experience = (props) => {
        const {data, key} = props;
        console.log(data);
        return (
            <Box key={key}>
                <Typography>{data.title}</Typography>
                <Typography>{data.company}</Typography>
                <Typography>{data.time}</Typography>
                <Typography>{data.location}</Typography>
                <Typography>{data.overview}</Typography>
                <Typography>{data.details}</Typography>
            </Box>
        );
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid container size={4}>
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
                </Grid>
                <Grid container size={8}>
                    <Box>
                        <Typography>{rpKeys[0]}</Typography>
                        <Typography>{data.rightPanel.sections.objective}</Typography>
                    </Box>
                    <Box>
                        <Typography>{rpKeys[1]}</Typography>
                        {data.rightPanel.sections.experience.map((exp, index) => {
                            return (
                                <Experience key={exp.title+'_'+index} data={exp} />
                            );
                        })}
                    </Box>
                    <Box>
                        <Typography>{rpKeys[2]}</Typography>
                        <Experience data={data.rightPanel.sections.leadership[0]} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );  
}

export default Resume;