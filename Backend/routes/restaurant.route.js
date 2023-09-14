
const {Router} = require('express');

const restaurantRouter = Router();

const {
    getRestaurants,
    getRestaurant,
    addNewRestaurant,
    updateRestaurant,
    deleteRestaurant
} = require('../controllers/restaurant');


restaurantRouter.get('/', getRestaurants);

restaurantRouter.get('/:id', getRestaurant);

restaurantRouter.post('/', addNewRestaurant);

restaurantRouter.put('/:id', updateRestaurant);

restaurantRouter.patch('/:id', updateRestaurant);

restaurantRouter.delete('/:id', deleteRestaurant);


module.exports = restaurantRouter;