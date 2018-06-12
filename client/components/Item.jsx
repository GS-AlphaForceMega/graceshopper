import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { increaseCart, decreaseCart, removeCart } from '../store/cart'

const Item = (props) =>  {
        const product = props.item.product;
        const itemId = product.id;
        const orderId = props.order;
        const userId = Number(props.user.id);
        return (
            <div className="item">
                <Link to={`/products/${product.id}`}>
                <div className="item_image">
                    <img className="preview-img" src={product.imageUrl} />
                </div>
                <div className="item_details">
                    <div><h2>{product.name}</h2></div>
                    <div><h2>Final Price: ${product.price}</h2></div>
                    <div><h3>{product.description}</h3></div>
                </div>
                </Link>
                <h2>{props.item.quantity}</h2>
                <button onClick={() => props.increaseTheCart(userId, orderId, itemId)}>+</button>
                <button onClick={() => props.decreaseTheCart(userId, orderId, itemId)}>-</button>
                <button onClick={() => props.removeFromCart(userId, orderId, itemId)} >Remove</button>
            </div>
        )
}



const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      cart: state.cart,
      user: state.user,
      order: state.order
    }
  }
const mapDispatch = dispatch => {
    return {
        increaseTheCart: (userId, orderId, productId) => dispatch(increaseCart(userId, orderId, productId)),
        decreaseTheCart: (userId,orderId, productId) => dispatch(decreaseCart(userId, orderId, productId)),
        removeFromCart: (userId, orderId, productId) => dispatch(removeCart(userId, orderId, productId))
    }
}

  export default connect(null, mapDispatch)(Item)