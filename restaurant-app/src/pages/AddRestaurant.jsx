import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { postRestaurant } from '../redux/Restaurant/action';
import { useParams } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Restaurant App
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddRestaurant() {

    const initialState = {
        name: '',
        address: '',
        contact: '',
        email: '',
        description: ''
    }

    const [restaurant, setRestaurant] = React.useState(initialState);
    const dispatch = useDispatch()
    const parmas = useParams()

    console.log(parmas);

    const {name, address, contact, email, description} = restaurant

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postRestaurant(restaurant))
    };

    const handleChange = (e) => {
        const {value, name} = e.target
        setRestaurant({...restaurant, [name]: value})
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Add New Restaurant
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Restaurant Name"
                            name="name"
                            autoComplete="name"
                            value={name}
                            onChange={handleChange}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Address"
                            name="address"
                            autoComplete="address"
                            value={address}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Contact"
                            name="contact"
                            autoComplete="contact"
                            value={contact}
                            onChange={handleChange}
                            type='number'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={handleChange}
                            type='email'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            autoComplete="description"
                            value={description}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            ADD RESTAURANT
                        </Button>
                        
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}