import {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    
    const sendEmail = async () => {
        const templateParams = {
            from_name: name,
            email: email,
            subject: subject,
            message: body
        };
        
        try {
            await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, templateParams);
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <Box sx={{
            flexGrow: 1, 
            marginTop: '8px',
            height: 'calc(100%  - 72px)',
            maxWidth: '100%',
            alignContent: 'center'
        }}>
            <Grid container spacing={1}>
                <Grid size={2}></Grid>
                <Grid size={4}>
                    <Typography
                        variant='h2'
                        align='center'
                        sx={{
                            fontFamily: 'Dancing Script, cursive',
                        }}
                    >
                        Want to hire me?
                        <br/>
                        Let&apos;s chat!
                    </Typography>
                    <Typography
                        variant='h6'
                        align='center'
                        sx={{
                            fontFamily: 'Merriweather',
                        }}
                    >
                        We could create something wonderful, together.
                    </Typography>
                    <Box
                        sx={{margin: '8px', padding: '8px', background: '#272727', borderRadius: '8px'}}
                    >
                        <Box sx={{display: 'flex', margin: '4px'}}>
                            <EmailIcon />
                            <Typography>hnmateja@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', margin: '4px'}}>
                            <LinkedInIcon />
                            <Link href="https://www.linkedin.com/in/hannahmateja/" rel="noopener" target="_blank">LinkedIn</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={4}>
                    <Box
                        sx={{display: 'flex', flexDirection: 'column'}}
                    >
                        <Typography
                            variant='h6'
                            align='center'
                            sx={{
                                fontFamily: 'Merriweather',
                            }}
                        >
                            Send me a message
                        </Typography>
                        <TextField
                            sx={{ margin: '4px'}}
                            required
                            id="outlined-required"
                            label="Full Name"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                        <TextField
                            sx={{ margin: '4px'}}
                            required
                            id="email"
                            label="Email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <TextField
                            sx={{ margin: '4px'}}
                            id="subject"
                            label="Subject"
                            value={subject}
                            onChange={(event) => {
                                setSubject(event.target.value);
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily: 'Merriweather',
                            }}
                        >
                            Tell me more about your project or open role!*
                        </Typography>
                        <TextField
                            sx={{ margin: '4px'}}
                            required
                            id="body"
                            multiline
                            rows={4}
                            value={body}
                            onChange={(event) => {
                                setBody(event.target.value);
                            }}
                        />
                        <Button 
                            variant="contained"
                            sx={{margin: '4px', width: '200px'}}
                            onClick={sendEmail}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Grid>
                <Grid size={2}></Grid>
            </Grid>
        </Box>
    )
};

export default Contact;