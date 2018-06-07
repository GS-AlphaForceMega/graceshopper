import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductPreview from './productPreview';
import {fetchProducts} from '../store/products'


const products = [{id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 105, salePrice: 50, review: '****', restaurant:{id: 2}},
{id:4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 120, salePrice: 50, review: '****', restaurant:{id: 2}}]
const restaurantIds = [1, 2]

class AllProducts extends Component  {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getProducts()
    }

    render(){
        console.log('restaurantIds in AllProducts', this.props.restaurantIds);
        const restaurantIds = this.props.restaurantIds;
        return (
            <div>
                <div>
                    
                    {   this.props.products.length >= 1 ?
                        this.props.products.map(product => {
                            return restaurantIds.length >= 1 ? (this.props.restaurantIds.includes(product.restaurant.id) ? 
                            <Link to={`/products/${product.id}`} key={product.id} ><ProductPreview product={product}/></Link>
                            : <h2>There are no deals which meet the current search criteria</h2>) 
                            : <Link to={`/products/${product.id}`} key={product.id} ><ProductPreview product={product}/></Link>;
                        })
                        : <h2>There are currently no deals for sale</h2>
                    }
                </div>
            </div>
        )
    }
    
}

const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      products: state.products,
      restaurantIds: state.restaurantIds
    }
  }
const mapDispatch = dispatch => {
    return {
        getProducts: () => dispatch(fetchProducts())
    }
} 

export default connect(mapState, mapDispatch)(AllProducts)
