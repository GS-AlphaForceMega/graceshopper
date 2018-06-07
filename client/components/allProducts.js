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

    // componentDidMount() {
    //     fetchProducts
    // }

    render(){
        const restaurantIds = this.props.restaurantIds;
        return (
            <div>
                <div>
                    {
                        this.props.products.map(product => {
                            return restaurantIds.length >= 1 ? (this.props.restaurantIds.includes(product.restaurant.id) ? 
                            <div key={product.id}>
                            <Link to={`/products/${product.id}`} ><ProductPreview product={product}/></Link>
                            <Link to={`edit/products/${product.id}`} ><button>Edit</button></Link>
                            </div>
                            : null) : 
                            <div key={product.id}>
                            <Link to={`/products/${product.id}`} ><ProductPreview product={product}/></Link>
                            <Link to={ {
                                pathname: `edit/products/${product.id}`,
                                // state: product
                            } } ><button>Edit</button></Link>
                            </div>
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

const mapDispatch = dispatch => {
    return {
        fetchProducts: dispatch(fetchProducts)
    }
}

export default connect(mapState)(AllProducts)
