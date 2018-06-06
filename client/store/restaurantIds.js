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
export const addRestaurantId = (restaurantId) => ({type: ADD_RESTAURANT, restaurantId})
export const removeRestaurantId = (restaurantId) => ({type: REMOVE_RESTAURANT, restaurantId})



/**
 * THUNK CREATORS
 */
// export const fetchRestaurants = () =>
//   dispatch =>
//     axios.get('/api/restaurants')
//       .then(res =>
//         dispatch(getAllRestaurants(res.data || defaultRestaurants)))
//       .catch(err => console.log(err))

// export const deleteRestaurant = (restaurantId) =>
//   dispatch =>
//     axios.delete(`/api/restaurants/${restaurantId}`)
//       .then(res =>
//         dispatch(removeRestaurant(res.data.id)))
//       .catch(err => console.log(err))

// export const editRestaurant = (restaurant) =>
//     dispatch =>
//     axios.put(`/api/restaurants/${restaurant.id}`)
//       .then(res =>
//         dispatch(updateRestaurant(res.data)))
//       .catch(err => console.log(err))

// export const createRestaurant = (restaurant) =>
//     dispatch =>
//     axios.post('/api/restaurants', restaurant)
//       .then(res =>
//         dispatch(addRestaurant(res.data)))
//       .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultRestaurantIds, action) {
  switch (action.type) {
    case ADD_RESTAURANT_ID:
        return [...state.restaurantIds, action.restaurantId]
    case REMOVE_RESTAURANT_ID:
      return state.restaurantIds.filter(restaurantId => {
          return restaurantId !== action.restaurantId;
      })
    default:
      return state
  }
}