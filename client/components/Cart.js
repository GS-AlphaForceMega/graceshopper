import React, { Component } from 'react';
import {connect} from 'react-redux'
import Item from './Item.jsx';
import Checkout from './Checkout';
import { increaseCart, decreaseCart } from '../store/cart'

// increaseCart={this.props.increaseTheCart} decreaseCart={this.props.decreaseTheCart}

class Cart extends Component  {

    render(){
        return (
            <div className="cart">
                <div className="all-items">
                    {
                        this.props.cart.map(item => {
                            return <Item user={this.props.user} key={item.product.id} item={item}  order={this.props.order} />
                        })
                    }
                </div>
                <h1>Cart Total: ${this.props.cart.reduce((sum, item) => {
                    let number = sum + (item.product.price * item.quantity)
                    return Number.parseFloat(number).toFixed(2)
                }, 0)}</h1>


<Checkout
  name={'The best deals in your city'}
  description={'Enter valid email for getttin tickets'}
  amount={1}
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
