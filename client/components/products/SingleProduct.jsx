import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchProduct } from '../../store/currentProduct';
import { fillCart } from '../../store/cart'


class SingleProduct extends Component  {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getProduct(Number(this.props.match.params.productId))
    }

    handleClick(evt) {
        this.props.addProduct(this.props.user.id, this.props.order, this.props.product.id);
    }
    render(){
        const productId = this.props.match.params.productId;
        // const product = this.props.products.filter(prod => {
        //     return Number(prod.id) === Number(productId)
        // });

        return (
            <div className="singleProduct">{
                this.props.product.name ?
                    (<div className="singleProduct-display">
                        <div><img src={this.props.product.imageUrl} /></div>
                        <div>
                            <h3>{this.props.product.name}</h3>
                            <p>{this.props.product.description}</p>
                            <h3>{this.props.product.price}</h3>
                            <p>{this.props.product.review}</p>
                        </div>
                        <button onClick={this.handleClick}>Add To Cart</button>
                    </div>)
                : (<h3>Product not found.</h3>)
            }</div>
        )
    }

}

const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      product: state.currentProduct,
      order: state.order,
      user: state.user
    }
  } 
const mapDispatch = dispatch => {
    return {
        getProduct: (productId) => dispatch(fetchProduct(productId)),
        addProduct: (userId, orderId, productId) => dispatch(fillCart(userId, orderId, productId))
    }
}

export default connect(mapState, mapDispatch)(SingleProduct)
