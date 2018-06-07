import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
export const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products})
export const removeProduct = (productId) => ({type: REMOVE_PRODUCT, productId})
export const addProduct = (product) => ({type: ADD_PRODUCT, product})
export const updateProduct = (product) => ({type: UPDATE_PRODUCT, product})


/**
 * THUNK CREATORS
 */
export const fetchProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(res =>
        dispatch(getAllProducts(res.data || defaultProducts)))
      .catch(err => console.log(err))

export const deleteProduct = (productId) =>
  dispatch =>
    axios.delete(`/api/products/${productId}`)
      .then(res =>
        dispatch(removeProduct(res.data.id)))
      .catch(err => console.log(err))

export const editProduct = (product) =>
    dispatch =>
    axios.put(`/api/products/${product.id}`)
      .then(res =>
        dispatch(updateProduct(res.data)))
      .catch(err => console.log(err))

export const createProduct = (product) =>
    dispatch =>
    axios.post('/api/products', product)
      .then(res =>
        dispatch(addProduct(res.data)))
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    case REMOVE_PRODUCT:
      return state.errfilter(product => {
          return product.id !== action.productId;
      })
    case ADD_PRODUCT:
      return [...state, action.product]
    case UPDATE_PRODUCT:
      return state.map(product => {
          return product.id === action.product.id ? action.product : product;
      })
    default:
      return state;
  }
}