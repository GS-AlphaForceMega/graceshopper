import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProduct } from '../../store/currentProduct';
import { fillCart } from '../../store/cart'
import {Link} from 'react-router-dom'


class SingleProduct extends Component {
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
    render() {
        const productId = this.props.match.params.productId;
        const createOptions = (optionsNumber) => {
            let i = 0;
            let finalOptions = new Array(optionsNumber).fill(1);
            return finalOptions.map(option => {
                i += 1;
                return (<option key={i} >{i}</option>);
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
                                <div><button onClick={this.handleClick}>Add To Cart</button></div>
                                <div>
                                    <select>
                                        {
                                            createOptions(this.props.product.quantity)
                                        }
                                    </select>
                                </div>
                                {
                                    this.props.user.isAdmin ? (
                                        <Link to={`/edit/products/${this.props.product.id}`} user={this.props.user}>
                                            <button>Edit</button>
                                        </Link>
                                    ) : null
                                }
                            </div>
                        </div>)
                        : (<h3>Product not found.</h3>)
                }
            </div >
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
