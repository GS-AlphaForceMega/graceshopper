import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const products = [{id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'},{id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'},{id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'},{id:4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****'}]


class AllProducts extends Component  {

    render(){
        console.log("We are in allProductsssssss");
        return (
            <div>
                <h1>We got it!!!!</h1>
                <div>
                    {
                        props.products.map(product => {
                            return <Link to={`/products/${product.id}`}><ProductPreview product={product}/></Link>;
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
      products: products
    }
  } 

export default connect(mapState)(AllProducts)
