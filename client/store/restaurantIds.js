import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_RESTAURANT_ID = 'ADD_RESTAURANT_ID'
const REMOVE_RESTAURANT_ID = 'REMOVE_RESTAURANT_ID'

/**
 * INITIAL STATE
 */
const defaultRestaurantIds = []

/**
 * ACTION CREATORS
 */
export const addRestaurantId = (restaurantId) => ({type: ADD_RESTAURANT_ID, restaurantId})
export const removeRestaurantId = (restaurantId) => ({type: REMOVE_RESTAURANT_ID, restaurantId})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultRestaurantIds, action) {
  switch (action.type) {
    case ADD_RESTAURANT_ID:
        return [...state, Number(action.restaurantId)]
    case REMOVE_RESTAURANT_ID:
      return state.filter(restaurantId => {
          return Number(restaurantId) !== Number(action.restaurantId);
      })
    default:
      return state
  }
}