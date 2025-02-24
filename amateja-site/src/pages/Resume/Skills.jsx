import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import '@fontsource/merriweather';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Skills = (props) => {
    const {data} = props;
    const subcategories = Object.keys(data.subcategories);
    return (
        <Box>
            <Typography
                variant='h6'
                sx={{
                    fontFamily: 'Merriweather',
                    borderBottom: 'solid',
                    borderBottomColor: 'white'
                }}
            >
                {data.title}
            </Typography>
            <Box sx={{marginTop: '8px', marginBottom: '8px'}}>
                {subcategories.map((category) => {
                    const values = data.subcategories[category];
                    return (
                        <Box key={category}>
                            <Typography sx={{fontWeight: 'bold'}}>{category}</Typography>
                            <List>
                                {values.map((value) => {
                                    return (
                                        <ListItem key={value} sx={{paddingLeft: '28px'}}>
                                            <ListItemIcon>
                                                <CircleIcon fontSize="xs" />
                                            </ListItemIcon>
                                            <ListItemText primary={value} />
                                        </ListItem>
                                    );
                                })}  
                            </List>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default Skills;