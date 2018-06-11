import axios from 'axios'
import {setOrder} from './order'

/**
 * ACTION TYPES
 */
const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const INCREASE_IN_CART = 'INCREASE_IN_CART'
const DECREASE_IN_CART = 'DECREASE_IN_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

/**
 * INITIAL STATE
 */
const defaultCart = []

/**
 * ACTION CREATORS
 */
export const setCart = (cart) => ({type: SET_CART, cart})
export const addToCart = (product, quantity) => ({type: ADD_TO_CART, product, quantity})
export const increaseInCart = (productId) => ({type: INCREASE_IN_CART, productId})
export const decreaseInCart = (productId) => ({type: DECREASE_IN_CART, productId})
export const removeFromCart = (productId) => ({type: REMOVE_FROM_CART, productId})


/**
 * THUNK CREATORS
 */
export const fetchCart = (userId) => 
    dispatch =>
        axios.get(`/api/users/${userId}/orders/latest`)
        .then(order => {
            dispatch(setCart(order.data.cart || []))
            dispatch(setOrder(order.data.orderId))
        })
        .catch(err => console.error(err))
        
export const fillCart = (userId, orderId, productId, quantity) =>
    dispatch => 
        axios.post(`/api/users/${userId}/orders`, {orderId, productId})
        .then(order => dispatch(addToCart(order, quantity)))
        .catch(err => console.error(err))

export const increaseCart = (userId, orderId, productId) =>
    dispatch => 
        axios.put(`/api/users/${userId}/orders/increase`, {orderId, productId})
        .then(order => dispatch(increaseInCart(order.data.productId)))
        .catch(err => console.error(err))

export const decreaseCart = (userId, orderId, productId) =>
    dispatch => 
        axios.put(`/api/users/${userId}/orders/decrease`, {orderId, productId})
        .then(order => dispatch(decreaseInCart(order.data.productId)))
        .catch(err => console.error(err))

export const removeCart = (userId, orderId, productId) =>
    dispatch => 
        axios.delete(`/api/users/${userId}/orders`, {orderId})
        .then(order => dispatch(removeFromCart(order.id)))
        .catch(err => console.error(err))

/**
 * REDUCER
 */
export default function (state = defaultCart, action) {
  switch (action.type) {
    case SET_CART:
        return action.cart
    case ADD_TO_CART:
        return [...state, {product: action.product, quantity: action.quantity}]
    case INCREASE_IN_CART:
        console.log('increasingggggg', action)
        return state.map(something => {
            if (something.product.id === action.productId) {
              something.quantity++;
            }
            return something;
        })
    case DECREASE_IN_CART:
      return state.map(something => {
          if (something.product.id === action.productId) {
            if (something.quantity > 1) {
                something.quantity--;
            } else {
                return 
            }
          }
          return something
      })
    case REMOVE_FROM_CART:
        return state.filter(something => {
            return something.product.id !== action.productId;
        })
    default:
      return state
  }
}