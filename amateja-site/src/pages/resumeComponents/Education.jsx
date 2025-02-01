import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Education = (props) => {
    const {data} = props;

    return (
        <Box>
            <Typography>{data.title}</Typography>
            <Typography>{data.years}</Typography>
            <Typography>{data.degree}</Typography>
            <Typography>{data.study}</Typography>
            <Typography>{data.university}</Typography>
            <Typography> GPA: {data.gpa}</Typography>
        </Box>
    );
};

export default Education;