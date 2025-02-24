import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import '@fontsource/courier-prime';
import { Box } from '@mui/material';

const Project = (props) => {
    const {title, techStack, img, description} = props;

    return (
        <Card 
            sx={{maxWidth: 350, margin: '8px'}}
        >
            <CardHeader
                title={title}
                subheader={techStack}
                slotProps={{
                    title: {
                        sx: {
                            fontFamily: 'Courier Prime'
                        }
                    }
                }}
            />
            <CardContent>
                <Box sx={{width: '100%', height: '200px'}}>
                    <img src={img} alt="Thumbnail for Aster's personal website" style={{width: '100%', height: '100%', objectFit: 'stretch'}}/>
                </Box>
                <Typography sx={{marginTop: '8px'}}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{padding: '16px'}}>
                <IconButton 
                    aria-label='see on github' 
                    href='https://github.com/anmateja/amateja-site' 
                    rel="noopener" 
                    target="_blank"
                >
                    <GitHubIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Project;