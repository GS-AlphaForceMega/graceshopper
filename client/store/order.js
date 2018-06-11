import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_ORDER = 'SET_ORDER'

/**
 * INITIAL STATE
 */
const defaultOrder = null;

/**
 * ACTION CREATORS
 */
export const setOrder = (orderId) => ({type: SET_ORDER, orderId})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultOrder, action) {
  switch (action.type) {
    case SET_ORDER:
        return action.orderId
    default:
      return state
  }
}