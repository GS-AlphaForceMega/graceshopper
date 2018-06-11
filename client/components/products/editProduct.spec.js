/* global describe beforeEach afterEach it */
import React from 'react';
import {expect} from 'chai';
import {createStore} from 'redux';
import {shallow} from 'enzyme';
import reducer, {getAllProducts, addProduct, updateProduct} from '../../store/products'
import { EditProduct } from './editProduct';


describe('Product Reducer', () => {
    let testStore;
    const fakeProducts = [{id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****', restaurant:{id: 1}},
      {id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}},
      {id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 105, salePrice: 50, review: '****', restaurant:{id: 2}},
      {id:4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 120, salePrice: 50, review: '****', restaurant:{id: 2}}]
	beforeEach('mock store', () => {
		testStore = createStore(reducer)
	})


	it('has correct initial state', () => {
		expect(testStore.getState()).to.be.deep.equal([])
	})


	it('sets products on store', () => {
		testStore.dispatch({type : 'GET_ALL_PRODUCTS', products: fakeProducts});
		expect(testStore.getState()).to.be.deep.equal(fakeProducts)
	})


	it('adds new product to store', () => {
		testStore.dispatch({type : 'ADD_PRODUCT', product: fakeProducts[0]});
		expect(testStore.getState()).to.be.deep.equal([fakeProducts[0]])
	})
})

describe('Edit Product', () => {
    let testStore, group;
    const fakeProducts = [{id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****', restaurant:{id: 1}},
      {id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}},
      {id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 105, salePrice: 50, review: '****', restaurant:{id: 2}},
      {id:4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 120, salePrice: 50, review: '****', restaurant:{id: 2}}]
    const updatedProduct = {id: 2, name: 'Riceyyyyy', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}}
      beforeEach('mockstore', () => {
          testStore = createStore(reducer)
          group = shallow(<EditProduct product={{id: 2, name: 'Riceyyyyy', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}} }/>)
      })

      it('can edit product', () => {
          testStore.dispatch({type: 'GET_ALL_PRODUCTS', products: fakeProducts})
          testStore.dispatch({type: 'UPDATE_PRODUCT', product: updatedProduct})
          expect(testStore.getState()[1]).to.be.deep.equal(updatedProduct)
      })
})