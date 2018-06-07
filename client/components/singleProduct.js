import React, { Component } from 'react';
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'


class SingleProduct extends Component  {


    render(){
        const productId = this.props.match.params.productId;
        const product = this.props.products.filter(prod => {
            return Number(prod.id) === Number(productId)
        });

        return (
            <div>
                <div>
                    {
                        product ? (
                                <div>
                                    <div><img src={product.imageUrl} /></div>
                                    <div>
                                        <div>{product.name}</div>
                                        <div>{product.description}</div>
                                        <div>{product.price}</div>
                                        <div>{product.review}</div>
                                    </div>
                                </div>
                            ) : null
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
    }
  } 

export default connect(mapState)(SingleProduct)
