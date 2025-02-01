import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import Link from '@mui/material/Link';
import '@fontsource/merriweather';

const Contact = (props) => {
    const {data} = props;
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
            <List>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={data.value[0].value} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={data.value[1].value} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <Link href={data.value[2].value}>
                        <ListItemText primary={data.value[2].type} />
                    </Link>
                </ListItem>
            </List>
        </Box>
    );
};

export default Contact;