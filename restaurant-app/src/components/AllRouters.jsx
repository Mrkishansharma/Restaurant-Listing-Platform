import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import AddRestaurant from '../pages/AddRestaurant'

function AllRouters() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Restaurants' element={<Restaurant />} />
                <Route path='/Add-Restaurant' element={<AddRestaurant />} />
                <Route path='/Edit-Restaurant/:id' element={<AddRestaurant />} />
            </Routes>
        </>
    )
}

export default AllRouters