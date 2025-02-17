import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Project from './PortfolioComponents/Project';

const Portfolio = () => {
    return (
        <Box sx={{ flexGrow: 1, 
            marginTop: '8px', 
            minHeight: '100vh',
            height: '100vh',
            width: '100vw'}}
        >
            <Grid container spacing={2}>
                <Grid size={2}></Grid>
                <Grid size={8}>
                    <Project
                        title='Personal Website'
                        techStack='React, Vite, JS'
                        description="Aster Mateja's personal website."
                    />
                </Grid>
                <Grid size={2}></Grid>
            </Grid>
        </Box>
    )
};

export default Portfolio;