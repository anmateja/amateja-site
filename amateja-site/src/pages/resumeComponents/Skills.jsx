import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import '@fontsource/merriweather';

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
            {subcategories.map((category) => {
                const values = data.subcategories[category];
                return (
                    <Box key={category}>
                        <Typography>{category}</Typography>
                        <List>
                            {values.map((value) => {
                                return (
                                    <ListItem key={value}>
                                        <ListItemIcon>
                                            <CircleIcon fontSize="small" />
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
    );
};

export default Skills;