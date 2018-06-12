import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_RESTAURANTS = 'GET_ALL_RESTAURANTS'
const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT'
const ADD_RESTAURANT = 'ADD_RESTAURANT'
const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT'

/**
 * INITIAL STATE
 */
const defaultRestaurants = []

/**
 * ACTION CREATORS
 */
const getAllRestaurants = restaurants => ({type: GET_ALL_RESTAURANTS, restaurants})
const removeRestaurant = (restaurantId) => ({type: REMOVE_RESTAURANT, restaurantId})
const addRestaurant = (restaurant) => ({type: ADD_RESTAURANT, restaurant})
const updateRestaurant = (restaurant) => ({type: UPDATE_RESTAURANT, restaurant})

/**
 * THUNK CREATORS
 */
export const fetchRestaurants = () =>
  dispatch =>
    axios.get('/api/restaurants')
      .then(res =>
        dispatch(getAllRestaurants(res.data || defaultRestaurants)))
      .catch(err => console.log(err))

export const deleteRestaurant = (restaurantId) =>
  dispatch =>
    axios.delete(`/api/restaurants/${restaurantId}`)
      .then(res =>
        dispatch(removeRestaurant(res.data.id)))
      .catch(err => console.log(err))

export const editRestaurant = (restaurant) =>
    dispatch =>
    axios.put(`/api/restaurants/${restaurant.id}`)
      .then(res =>
        dispatch(updateRestaurant(res.data)))
      .catch(err => console.log(err))

export const createRestaurant = (restaurant) =>
    dispatch =>
    axios.post('/api/restaurants', restaurant)
      .then(res =>
        dispatch(addRestaurant(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultRestaurants, action) {
  switch (action.type) {
    case GET_ALL_RESTAURANTS:
      return action.restaurants;
    case REMOVE_RESTAURANT:
      return state.restaurants.filter(restaurant => {
          return restaurant.id !== action.restaurantId;
      })
    case ADD_RESTAURANT:
      return [...state.restaurants, action.restaurant]
    case UPDATE_RESTAURANT:
      return state.restaurants.map(restaurant => {
          return restaurant.id === action.restaurant.id ? action.restaurant : restaurant;
      })
    default:
      return state
  }
}