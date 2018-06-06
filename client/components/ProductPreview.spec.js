/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductPreview from './productPreview'
import {AllProducts} from './allProducts'

const adapter = new Adapter()
enzyme.configure({adapter})
describe('ProductPreview', () => {
  let productDisplay
  let productDisplay2
  let product = {id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'}
  beforeEach(() => {
    productDisplay = shallow(<ProductPreview product={product} />)
    productDisplay2 = shallow(<AllProducts products={[product]} />)
  })

  it('renders the email in an h2', () => {
    expect(productDisplay.find('h2').first().text()).to.be.equal(product.name)
    expect(productDisplay.find('h2').at(1).text()).to.be.equal(`${product.originalPrice}`)
  })
  it('renders from allproducts', () => {
    expect(productDisplay2.find('h2').first().text()).to.be.equal(product.name)
  })
})


