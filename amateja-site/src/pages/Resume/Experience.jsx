import '@fontsource/merriweather';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';

const Experience = (props) => {
    const {data} = props;
    return (
        <Box sx={{marginTop: '8px', marginBottom: '8px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography sx={{fontWeight: 'bold'}}>{data.title}</Typography> |
                <Typography>{data.company}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row'}}> 
                <Typography>{data.time}</Typography> |
                <Typography>{data.location}</Typography>
            </Box>
            {data.overview ? <Typography>{data.overview}</Typography> : null}
            {data.details ? 
            <Box>
                <List>
                    {data.details.map((detail, index) => {
                        return (
                            <ListItem key={'detail'+index}>
                                <ListItemIcon>
                                    <CircleIcon fontSize="xs" />
                                </ListItemIcon>
                                <ListItemText primary={detail} />
                            </ListItem>
                        );
                    })}
                </List>
            </Box>: null}
        </Box> 
    );
};

export default Experience;