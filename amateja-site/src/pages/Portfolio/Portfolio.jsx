import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Project from '../PortfolioComponents/Project';
import background from '../assets/codeBg.jpg';
import theme from '../../themes/theme';

const Portfolio = () => {

    const getThumbnails = () => {
        const modules  = import.meta.glob("@assets/projectThumbnails/*.{png,jpg,jpeg}",
            {eager: true, query: '?url', import: 'default'}
        );

        const thumbs = [];
        for (const path in modules) {
            const p = new URL(path, import.meta.url).href;
            thumbs.push(p);
        }
        return thumbs;
    };

    const thumbs = getThumbnails();
    
    return (
        <Box 
            sx={{ 
                flexGrow: 1,  
                height: 'calc(100%  - 64px)',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <Grid container spacing={2} sx={{height: '100%'}}>
                <Grid size={2}></Grid>
                <Grid size={8} sx={{backgroundColor: theme.palette.background.default}}>
                    <Project
                        title='Personal Website'
                        techStack='React, Vite, JS'
                        img={thumbs[0]}
                        description="Aster Mateja's personal website."
                    />
                </Grid>
                <Grid size={2}></Grid>
            </Grid>
        </Box>
    )
};

export default Portfolio;