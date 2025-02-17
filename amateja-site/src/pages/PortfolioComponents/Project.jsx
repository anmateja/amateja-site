import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = (props) => {
    const {title, techStack, description} = props;
    return (
        <Card sx={{maxWidth: 350}}>
            <CardHeader
                title={title}
                subheader={techStack}
            />
            <CardContent>
                <Typography>
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