import axios from 'axios'

/**
 * ACTION TYPES
 */
// const GET_PRODUCT = 'GET_PRODUCT'
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
// const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_CURRENT_PRODUCT = 'UPDATE_CURRENT_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultProduct = {}
 
/**
 * ACTION CREATORS
 */
// export const getProduct = productId => ({type: GET_PRODUCT, productId})
export const setCurrentProduct = product => ({type: SET_CURRENT_PRODUCT, product})
// export const removeProduct = (productId) => ({type: REMOVE_PRODUCT, productId})
// export const addProduct = (product) => ({type: ADD_PRODUCT, product})
export const updateCurrentProduct = product => ({type: UPDATE_CURRENT_PRODUCT, product})


/**
 * THUNK CREATORS
 */
// export const fetchProduct = (productId) =>
//   dispatch =>
//     axios.get(`/api/products/${productId}`)
//       .then(res =>
//         dispatch(setProduct(res.data || defaultProduct)))
//       .catch(err => console.log(err))

// export const deleteProduct = (productId) =>
//   dispatch =>
//     axios.delete(`/api/products/${productId}`)
//       .then(res =>
//         dispatch(removeProduct(res.data.id)))
//       .catch(err => console.log(err))

// export const editCurrentProduct = (product) => {
//   return function() {
//     return axios.put('/api/products/1', product)
//     .then(res => {
//       console.log('put res',res)
//     })
//     .catch(console.error)
//   }
// }
export const editCurrentProduct = (product) =>
    dispatch => 
    axios.put(`/api/products/${product.id}`, product)
      .then(res =>{
        dispatch(updateCurrentProduct(res.data))})
      .catch(err => console.log(err))

// export const createProduct = (product) =>
//     dispatch =>
//     axios.post('/api/products', product)
//       .then(res =>
//         dispatch(addProduct(res.data)))
//       .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultProduct, action) {
  console.log('currentproduct reducer', action)
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      return action.product
    // case REMOVE_PRODUCT:
    //   return state.errfilter(product => {
    //       return product.id !== action.productId;
    //   })
    // case ADD_PRODUCT:
    //   return [...state, action.product]
    case UPDATE_CURRENT_PRODUCT:
        // return {...state, ...action.product}}
      return Object.assign({}, state, {...action.product})
    default:
      return state;
  }
}