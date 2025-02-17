import {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    return (
        <Box sx={{
            flexGrow: 1, 
            marginTop: '8px',
            height: '100vh',
            width: '100vw',
            minHeight: '100vh'
        }}>
            <Grid container spacing={1}>
                <Grid size={2}></Grid>
                <Grid size={4}>
                    <Typography>
                        Want to hire me?
                        <br/>
                        Let&apos;s chat!
                    </Typography>
                    <Typography>
                        We could create something wonderful, together.
                    </Typography>
                    <Box>
                        <Box sx={{display: 'flex'}}>
                            <EmailIcon />
                            <Typography>hnmateja@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex'}}>
                            <LinkedInIcon />
                            <Link href="https://www.linkedin.com/in/hannahmateja/" rel="noopener" target="_blank">LinkedIn</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={4}>
                    <Box>
                        <Typography>Send me a message</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Full Name"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                        <TextField
                            required
                            id="email"
                            label="Email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <TextField
                            id="subject"
                            label="Subject"
                            value={subject}
                            onChange={(event) => {
                                setSubject(event.target.value);
                            }}
                        />
                        <Typography></Typography>
                        <TextField
                            required
                            id="body"
                            multiline
                            rows={4}
                            onChange={(event) => {
                                setBody(event.target.value);
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={2}></Grid>
            </Grid>
        </Box>
    )
};

export default Contact;