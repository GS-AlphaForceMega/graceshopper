import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Item from './Item.jsx';


const products = [{id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 105, salePrice: 50, review: '****', restaurant:{id: 2}},
{id:4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 120, salePrice: 50, review: '****', restaurant:{id: 2}}]
const restaurantIds = [1, 2]

class Cart extends Component  {

    render(){
        console.log('restaurantIds in AllProducts', this.props.restaurantIds);
        const restaurantIds = this.props.restaurantIds;
        return (
            <div>
                <div className="all-items">
                    {
                        this.props.products.map(product => {
                            return restaurantIds.length >= 1 ? (this.props.restaurantIds.includes(product.restaurant.id) ? 
                            <Link to={`/products/${product.id}`} key={product.id} ><Item product={product}/></Link>
                            : null) : <Link to={`/products/${product.id}`} key={product.id} ><Item product={product}/></Link>;
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
