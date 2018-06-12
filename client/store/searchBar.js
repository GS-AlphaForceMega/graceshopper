import axios from 'axios'

/**
 * ACTION TYPES
 */
const CHANGE_SEARCH = 'CHANGE_SEARCH'

/**
 * INITIAL STATE
 */
const defaultSearch = ''
 
/**
 * ACTION CREATORS
 */
export const changeSearch = search => ({type: CHANGE_SEARCH, search})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultSearch, action) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.search
    default:
      return state;
  }
}