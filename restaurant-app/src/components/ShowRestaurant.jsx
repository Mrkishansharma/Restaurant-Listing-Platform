import { Box, Grid, Pagination, Stack } from '@mui/material'
import React from 'react'
import RestaurantCard from './RestaurantCard'

function ShowRestaurant({totalCount, restaurants, limit, page, handlePageChange}) {
    return (
        <>
            <Box
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10px',
                    marginTop: '10px',
                    overflowX: 'hidden'
                }}
            >
                <Box style={{ width: '80%' }}>

                    <Grid
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
                            gap: 5
                        }}
                    >
                        {restaurants?.map((restaurant, index) => (

                            <Grid item xs={2} sm={4} md={4} key={index}>

                                <RestaurantCard restaurant={restaurant} />

                            </Grid>

                        ))}
                    </Grid>
                </Box>
            </Box>
            <Stack
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 4 }}
            >
                <Pagination count={Math.ceil(totalCount / limit)} page={page} onChange={handlePageChange} color="primary" />
            </Stack>
        </>
    )
}

export default ShowRestaurant