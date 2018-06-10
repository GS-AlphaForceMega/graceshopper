import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
const INCREASE_IN_CART = 'DECREASE_IN_CART'
const DECREASE_IN_CART = 'DECREASE_IN_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

/**
 * INITIAL STATE
 */
const defaultCart = []

/**
 * ACTION CREATORS
 */
export const addToCart = (product, quantity) => ({type: ADD_CUISINE, product, quantity})
export const increaseInCart = (productId) => ({type: DECREASE_IN_CART, productId})
export const decreaseInCart = (productId) => ({type: DECREASE_IN_CART, productId})
export const removeFromCart = (productId) => ({type: REMOVE_FROM_CART, productId})


/**
 * THUNK CREATORS
 */



/**
 * REDUCER
 */
export default function (state = defaultCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
        return [...state, {product: action.product, quantity: action.quantity}]
    case INCREASE_IN_CART:
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