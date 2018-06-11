import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'
import restaurants from './restaurants'
import restaurantIds from './restaurantIds'
import currentProduct from './currentProduct'
import searchBar from './searchBar'
import cuisines from './cuisines'
import order from './order'
import cart from './cart'

const reducer = combineReducers({user, products, restaurants, restaurantIds, currentProduct, searchBar, cuisines, cart, order})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './restaurants'
export * from './restaurantIds'
export * from './currentProduct'
export * from './searchBar'
export * from './cuisines'
export * from './order'
export * from './cart'
