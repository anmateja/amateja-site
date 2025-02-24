import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import '@fontsource/merriweather';

const Education = (props) => {
    const {data} = props;

    return (
        <Box>
            <Typography
                variant='h6'
                sx={{
                    fontFamily: 'Merriweather',
                    borderBottom: 'solid',
                    borderBottomColor: 'white',
                }}
            >
                {data.title}
            </Typography>
            <Box sx={{marginTop: '8px', marginBottom: '8px'}}>
                <Typography sx={{fontWeight: 'bold'}}>{data.years}</Typography>
                <Typography>{data.degree}</Typography>
                <Typography>{data.study}</Typography>
                <Typography>{data.university}</Typography>
                <Typography> GPA: {data.gpa}</Typography>
            </Box>
        </Box>
    );
};

export default Education;