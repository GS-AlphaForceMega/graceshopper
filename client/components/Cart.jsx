import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from './Item.jsx';
import Checkout from './Checkout.jsx';
import { increaseCart, decreaseCart } from '../store/cart'

// increaseCart={this.props.increaseTheCart} decreaseCart={this.props.decreaseTheCart}

class Cart extends Component {

    render() {
        const total = this.props.cart.reduce((sum, item) => {
            let number = Number(sum) + (Number(item.product.price) * Number(item.quantity))
            return Number.parseFloat(number).toFixed(2)
        }, 0)
        return (
            <div className="cart">
                <div className="all-items">
                    {
                        this.props.cart.map(item => {
                            return <Item user={this.props.user} key={item.product.id} itemId={item.product.id} order={this.props.order} />
                        })
                    }
                </div>
                <h1>Cart Total: ${total}</h1>


                <Checkout
                    name={'The best deals in your city'}
                    description={'Enter valid email for getttin tickets'}
                    amount={total}
                />

            </div>
        )
    }

}

const mapState = state => {
    return {
        isLoggedIn: !!state.user.id,
        cart: state.cart,
        user: state.user,
        order: state.order
    }
}
// const mapDispatch = dispatch => {
//     return {
//         increaseTheCart: (userId, orderId, productId) => {
//             console.log('calling increasecart',userId, orderId, productId);
//             dispatch(increaseCart(userId, orderId, productId))},
//         decreaseTheCart: (userId,orderId, productId) => dispatch(decreaseCart(userId, orderId, productId))
//     }
// }

export default connect(mapState)(Cart)
