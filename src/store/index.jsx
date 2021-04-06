import { createStore, combineReducers, applyMiddleware } from 'redux'
import productsData from './reducers/products'
import userData from './reducers/userData'
import locationData from './reducers/location'

import thunk from 'redux-thunk'

const mainReducer = combineReducers({ productsData, userData, locationData })

const store = createStore(mainReducer, applyMiddleware(thunk))

export default store
