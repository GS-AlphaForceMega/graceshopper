import axios from 'axios'

/**
 * ACTION TYPES
 */
// const GET_PRODUCT = 'GET_PRODUCT'
const SET_PRODUCT = 'SET_PRODUCT'
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
// const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultProduct = {}

/**
 * ACTION CREATORS
 */
// export const getProduct = productId => ({type: GET_PRODUCT, productId})
export const setProduct = product => ({type: SET_PRODUCT, product})
// export const removeProduct = (productId) => ({type: REMOVE_PRODUCT, productId})
// export const addProduct = (product) => ({type: ADD_PRODUCT, product})
export const updateProduct = (product) => ({type: UPDATE_PRODUCT, product})


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

// export const editProduct = (product) =>
//     dispatch =>
//     axios.put(`/api/products/${product.id}`)
//       .then(res =>
//         dispatch(updateProduct(res.data)))
//       .catch(err => console.log(err))

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
  switch (action.type) {
    case SET_PRODUCT:
      return action.product
    // case REMOVE_PRODUCT:
    //   return state.errfilter(product => {
    //       return product.id !== action.productId;
    //   })
    // case ADD_PRODUCT:
    //   return [...state, action.product]
    case UPDATE_PRODUCT:
        // return {...state, ...action.product}}
      return Object.assign({}, state, {...action.product})
    default:
      return state;
  }
}