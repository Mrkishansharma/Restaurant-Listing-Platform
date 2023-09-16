import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

import React from 'react'

function RestaurantCard({ restaurant }) {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={restaurant.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                    <RestaurantIcon style={{ marginRight: '4px', fontWeight: 'bold', color: 'black' }} />
                    {restaurant.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <LocationOnIcon style={{ marginRight: '4px', fontWeight: 'bold', color: 'black' }} />
                    {restaurant.address}
                </Typography>
                <Typography variant="body1" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <WifiCalling3Icon style={{ marginRight: '4px', fontWeight: 'bold', color: 'black' }} />
                    {restaurant.contact}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RestaurantCard