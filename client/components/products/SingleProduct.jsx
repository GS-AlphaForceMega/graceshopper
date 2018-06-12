import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProduct } from '../../store/currentProduct';
import { fetchCart, fillCart } from '../../store/cart'

// import {Link} from 'react-router-dom'


class SingleProduct extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getProduct(Number(this.props.match.params.productId))
    }

    render() {
        const productId = this.props.match.params.productId;
        const createOptions = (optionsNumber) => {
            let i = 0;
            let finalOptions = new Array(optionsNumber).fill(1);
            return finalOptions.map(option => {
                i += 1;
                return (<option>{i}</option>);
            });
        }

        return (
            <div>
                {
                    this.props.product.name ?
                        (<div className="single-product">
                            <div><img src={this.props.product.imageUrl} /></div>
                            <div className="single-product-details">
                                <div className="single-product-details-item"><h3>{this.props.product.name}</h3></div>
                                <div className="single-product-details-item"><p>{this.props.product.description}</p></div>
                                <div className="single-product-details-item"><h3>${this.props.product.price}</h3></div>
                                <div className="single-product-details-item"><h3>{this.props.product.quantity} Items available!</h3></div>
                                <div><button onClick={handleClick}>Add To Cart</button></div>
                                <div>
                                    <select>
                                        {
                                            createOptions(this.props.product.quantity)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>)
                        : (<h3>Product not found.</h3>)
                }
            </div >
        )
    }

}


function handleClick(evnt) {
    const userCart = fetchCart(this.props.user.id);
}

const mapState = state => {
    return {
        isLoggedIn: !!state.user.id,
        user: state.user,
        product: state.currentProduct,
    }
}
const mapDispatch = dispatch => {
    return {
        getProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(mapState, mapDispatch)(SingleProduct)
