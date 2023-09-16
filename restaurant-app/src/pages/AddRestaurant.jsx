import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { postRestaurant, updateRestaurant } from '../redux/Restaurant/action';
import { useParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';

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
        image: ''
    }

    const [restaurant, setRestaurant] = React.useState(initialState);

    const { id: restaurantId } = useParams()

    const restaurantsData = useSelector((state) => state.restaurant.restaurant);

    const [isDone, setIsDone] = React.useState(false);

    const dispatch = useDispatch()


    React.useEffect(() => {
        if (restaurantId) {
            console.log(restaurantsData);
            const data = restaurantsData.find((item) => (+item.id) === (+restaurantId));
            setRestaurant(data)
        } else {
            setRestaurant(initialState)
        }
    }, [restaurantId])

    const { name, address, contact, image } = restaurant;


    const handleSubmit = (event) => {
        event.preventDefault();
        if (restaurantId) {
            dispatch(updateRestaurant(restaurantId, restaurant))
        } else {
            dispatch(postRestaurant(restaurant))
            setRestaurant(initialState)
        }
        setIsDone(true)
        setTimeout(()=>{
            setIsDone(false)
        },3000)
    };

    const handleChange = (e) => {
        const { value, name } = e.target
        setRestaurant({ ...restaurant, [name]: value })
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            {isDone && 
            <Alert severity="success" color="info">
                Successfully done !
            </Alert>
            }
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
                        {restaurantId ? "Update Existing Restaurant" : "Add New Restaurant"}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                            label="Contact Number"
                            name="contact"
                            autoComplete="contact"
                            value={contact}
                            onChange={handleChange}
                            
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Restaurant Image"
                            name="image"
                            autoComplete="image"
                            value={image}
                            onChange={handleChange}
                            type='url'
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {restaurantId ? "UPDATE RESTAURANT" : "ADD RESTAURANT"}
                        </Button>

                    </Box>
                </Box>
            </Container>

        </ThemeProvider>
    );
}