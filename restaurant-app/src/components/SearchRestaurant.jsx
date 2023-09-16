
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant } from '../redux/Restaurant/action';

export default function SearchRestaurant() {

    const restaurants = (useSelector((state) => state.restaurant.restaurant)) || [];
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getRestaurant())
    }, [])

    return (
        <Stack fullWidth>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={restaurants.map((option) => option.name)}
                renderInput={(params) => <TextField {...params} label="freeSolo" />}
            />
        </Stack>
    );
}
/*
 <TextField
    label="Restaurant Name"
    value={restaurantName}
    onChange={handleNameChange}
    fullWidth
    autoFocus
/> */

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
];