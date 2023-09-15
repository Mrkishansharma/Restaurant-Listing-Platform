
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';

import thunk from 'redux-thunk';

import { reducer as restaurantReducer } from './Restaurant/reducer';

const rootReducer = combineReducers({
    restaurant: restaurantReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
