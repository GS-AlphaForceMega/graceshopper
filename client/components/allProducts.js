import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductPreview from './productPreview';


const products = [{id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 105, salePrice: 50, review: '****', restaurant:{id: 2}},
{id:4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 120, salePrice: 50, review: '****', restaurant:{id: 2}}]
const restaurantIds = [1, 2]

class AllProducts extends Component  {

    render(){
        return (
            <div>
                <div>
                    {
                        this.props.products.map(product => {
                            return !this.props.restaurantIds.includes(product.restaurant.id) ? 
                            <Link to={`/products/${product.id}`} key={product.id} ><ProductPreview product={product}/></Link>
                            : null
                        })
                    }
                </div>
            </div>
        )
    }
    
}

const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      //change to state.products
      products: products,
      //change to state.restaurantIds
      restaurantIds: state.restaurantIds
    }
  } 

export default connect(mapState)(AllProducts)
