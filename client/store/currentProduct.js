import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
const UPDATE_CURRENT_PRODUCT = 'UPDATE_CURRENT_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultProduct = {}
 
/**
 * ACTION CREATORS
 */
export const setCurrentProduct = product => ({type: SET_CURRENT_PRODUCT, product})
export const updateCurrentProduct = product => ({type: UPDATE_CURRENT_PRODUCT, product})


/**
 * THUNK CREATORS
 */
export const fetchProduct = (productId) =>
  dispatch =>
    axios.get(`/api/products/${productId}`)
      .then(res =>
        dispatch(setCurrentProduct(res.data || defaultProduct)))
      .catch(err => console.log(err))

export const editCurrentProduct = (product) =>
    dispatch => 
    axios.put(`/api/products/${product.id}`, product)
      .then(res =>{
        dispatch(updateCurrentProduct(res.data))})
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultProduct, action) {
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      return action.product
    case UPDATE_CURRENT_PRODUCT:
      return Object.assign({}, state, {...action.product})
    default:
      return state;
  }
}