import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchProduct } from '../../store/currentProduct';
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
            <div className="single-product">
                <div>
                    {   this.props.product.name ?
                        (<div>
                            {console.log('single producttttttttttt',this.props)}
                            <div><img src={this.props.product.imageUrl} /></div>
                            <div>
                                <h3>{this.props.product.name}</h3>
                                <p>{this.props.product.description}</p>
                                <h3>{this.props.product.price}</h3>
                                <p>{this.props.product.review}</p>
                            </div>
                            <button onClick={handleClick}>Add To Cart</button>
                        </div>)
                        : (<h3>Product not found.</h3>)
                    }
                </div>
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
