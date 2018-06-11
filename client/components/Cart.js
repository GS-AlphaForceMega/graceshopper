import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Item from './Item.jsx';
import Checkout from './Checkout';
import { increaseCart, decreaseCart } from '../store/cart'



class Cart extends Component  {

    render(){
        return (
            <div className="cart">
                <div className="all-items">
                    {
                        this.props.cart.map(item => {
                            return <Link to={`/products/${item.id}`} key={item.id} >
                            <Item item={item} increaseCart={this.props.increaseCart} decreaseCart={this.props.decreaseCart} orderId={this.props.cart.orderId} />
                            </Link>
                        })
                    }
                </div>
                <h1>Cart Total: ${this.props.cart.reduce((sum, item) => {
                    return sum + Number(item.salePrice)
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
      cart: state.cart
    }
  }
const mapDispatch = dispatch => {
    return {
        increaseCart: (orderId, productId) => dispatch(increaseCart(orderId, productId)),
        decreaseCart: (orderId, productId) => dispatch(decreaseCart(orderId, productId))
    }
}

  export default connect(mapState)(Cart)
