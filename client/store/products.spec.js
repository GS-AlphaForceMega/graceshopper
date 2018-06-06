/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {getAllProducts, addProduct} from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {products: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getAllProducts', () => {
    it('eventually dispatches the GET ALL PRODUCTS action', () => {
        const fakeProducts = [
            {id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'},
            {id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'},
            {id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'},
            {id: 4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'}
        ]

      mockAxios.onGet('/api/products').replyOnce(200, fakeProducts)
      return store.dispatch(me())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_ALL_PRODUCTS')
          expect(actions[0].products).to.be.deep.equal(fakeProducts)
        })
    })
  })

//   describe('logout', () => {
//     it('logout: eventually dispatches the REMOVE_USER action', () => {
//       mockAxios.onPost('/auth/logout').replyOnce(204)
//       return store.dispatch(logout())
//         .then(() => {
//           const actions = store.getActions()
//           expect(actions[0].type).to.be.equal('REMOVE_USER')
//           expect(history.location.pathname).to.be.equal('/login')
//         })
//     })
//   })
})