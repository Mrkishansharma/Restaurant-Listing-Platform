
import { applyMiddleware, legecy_createStore } from 'redux';

import thunk from 'redux-thunk';

import { reducer as restaurantReducer } from './Restaurant/reducer';


export const store = legecy_createStore(restaurantReducer, applyMiddleware(thunk));
