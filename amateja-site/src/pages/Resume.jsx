import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import '@fontsource/merriweather';
import '@fontsource/roboto';
import Typography from "@mui/material/Typography";
import data from '../json/ResumeData.json';
import Education from "./resumeComponents/Education";


const Resume = () => {
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
                    </Box>
                </Grid>
                <Grid container size={8}>
                    
                </Grid>
            </Grid>
        </Box>
    );  
}

export default Resume;