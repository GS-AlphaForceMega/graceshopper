import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_CUISINE = 'ADD_CUISINE'
const REMOVE_CUISINE = 'REMOVE_CUISINE'

/**
 * INITIAL STATE
 */
const defaultCuisines = []

/**
 * ACTION CREATORS
 */
export const addCuisine = (cuisine) => ({type: ADD_CUISINE, cuisine})
export const removeCuisine = (cuisine) => ({type: REMOVE_CUISINE, cuisine})


/**
 * THUNK CREATORS
 */



/**
 * REDUCER
 */
export default function (state = defaultCuisines, action) {
  switch (action.type) {
    case ADD_CUISINE:
        return [...state, action.cuisine]
    case REMOVE_CUISINE:
      return state.filter(cuisine => {
          return cuisine !== action.cuisine;
      })
    default:
      return state
  }
}