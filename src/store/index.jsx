import { createStore, combineReducers, applyMiddleware } from 'redux'
import productsData from './reducers/products'

import thunk from 'redux-thunk'

const mainReducer = combineReducers({ productsData })

const store = createStore(mainReducer, applyMiddleware(thunk))

export default store
