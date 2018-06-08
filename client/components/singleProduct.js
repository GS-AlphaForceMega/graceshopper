import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchProduct } from '../store/currentProduct';
// import {Link} from 'react-router-dom'


class SingleProduct extends Component  {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.getProduct(Number(this.props.match.params.productId))
    }

    render(){
        const productId = this.props.match.params.productId;
        // const product = this.props.products.filter(prod => {
        //     return Number(prod.id) === Number(productId)
        // });

        return (
            <div>
                <div>
                    {   this.props.product ?
                        <div>
                            {console.log('single producttttttttttt',this.props)}
                            <div><img src={this.props.product.imageUrl} /></div>
                            <div>
                                <div>{this.props.product.name}</div>
                                <div>{this.props.product.description}</div>
                                <div>{this.props.product.price}</div>
                                <div>{this.props.product.review}</div>
                            </div>
                        </div>
                        : null
                    }
                </div>
                <button onClick={handleClick}>Add To Cart</button>
            </div>
        )
    }
    
}

function handleClick(evt) {
    
}

const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      product: state.currentProduct,
    }
  } 
const mapDispatch = dispatch => {
    return {
        getProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(mapState, mapDispatch)(SingleProduct)
