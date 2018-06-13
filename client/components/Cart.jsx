import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from './Item.jsx';
import Checkout from './Checkout.jsx';
import { increaseCart, decreaseCart } from '../store/cart'

// increaseCart={this.props.increaseTheCart} decreaseCart={this.props.decreaseTheCart}

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            invalidCouponCode: false,
            couponInput: ''
        };
        this.enterPromoCode = this.enterPromoCode.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(evt) {
        evt.preventDefault();
        this.setState({ couponInput: evt.target.value })
    }

    enterPromoCode(evt) {
        evt.preventDefault();
        const { halfOffUsed } = this.state;
        switch (evt.target.couponCode.value) {
            case 'coreyrulezdandroolz':
                if (!halfOffUsed) {
                    this.setState({
                        total: this.state.total / 2,
                        halfOffUsed: true,
                        invalidCouponCode: false
                    });
                }
                break;
            default:
                this.setState({ invalidCouponCode: true });
        }
        this.setState({ couponInput: '' })
    }

    componentDidMount() {
        this.setState({
            total: this.props.cart.reduce((sum, item) => {
                let number = Number(sum) + (Number(item.product.price) * Number(item.quantity))
                return Number.parseFloat(number).toFixed(2)
            }, 0)
        })
        if (this.state.halfOffUsed) this.setState({ total: this.state.total / 2 })
    }

    render() {
        // this.state.total = this.props.cart.reduce((sum, item) => {
        //     let number = Number(sum) + (Number(item.product.price) * Number(item.quantity))
        //     return Number.parseFloat(number).toFixed(2)
        // }, 0)
        let { total } = this.state;
        return (
            <div className="cart">
                <div className="all-items">
                    {
                        this.props.cart.length > 0 ?
                            this.props.cart.map(item => {
                                return <Item
                                    user={this.props.user}
                                    key={item.product.id}
                                    itemId={item.product.id}
                                    order={this.props.order}
                                    totalUpdate={this.componentDidMount.bind(this)}
                                />
                            })
                            : <h2>Your cart is currently empty.</h2>
                    }
                </div>
                {this.props.cart.length > 0 && (
                    <div id="promo-and-checkout">
                        <div id="promo-check">
                            <form id="promo-code-form" onSubmit={this.enterPromoCode}>
                                <input
                                    type="text"
                                    name="couponCode"
                                    placeholder="Enter coupon code"
                                    onChange={this.handlechange}
                                    value={this.state.couponInput}
                                />
                                <input type="submit" value="Validate" />
                            </form>
                        </div>
                        {this.state.invalidCouponCode && <h4>Invalid coupon code</h4>}
                        <div className="checkout-button">
                            <h1>Cart Total: ${total}</h1>
                            <Checkout
                                name={'The best deals in your city'}
                                description={'Enter valid email for getting tickets'}
                                amount={total}
                                orderId={this.props.order}
                                userId={this.props.user.id}
                            />
                        </div>
                    </div>
                )}
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
