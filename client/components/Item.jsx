import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart, removeCart } from '../store/cart'

const Item = (props) => {
    const itemId = props.itemId;
    const item = props.cart.filter(currProduct => {
        return currProduct.product.id === itemId;
    })[0]
    const orderId = props.order;
    const userId = Number(props.user.id);
    const totalUpdate = props.totalUpdate;
    return (
        <div className="item-div">
            <Link to={`/products/${item.product.id}`} className="item-div-preview">
                <div className="item-div-image">
                    <img className="preview-img" src={item.product.imageUrl} />
                </div>
                <div className="item-div-details">
                    <div className="item-div-details"><h2>{item.product.name}</h2></div>
                    <div className="item-div-details"><h3>{item.product.description}</h3></div>
                    <div className="item-div-details"><h2>Final Price: ${item.product.price}</h2></div>
                </div>
            </Link>
            <div className="item-div-quantity-and-buttons">
                <div className="item-div-buttons">
                    <button onClick={() => props.increaseTheCart(userId, orderId, itemId, totalUpdate)}>+</button>
                    <button onClick={() => props.decreaseTheCart(userId, orderId, itemId, totalUpdate)}>-</button>
                    <button onClick={() => props.removeFromCart(userId, orderId, itemId)} >Remove</button>
                </div>
                <h2>{item.quantity}</h2>
            </div>
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
        increaseTheCart: (userId, orderId, productId, update) => {
            dispatch(increaseCart(userId, orderId, productId))
                .then(() => update());
        },
        decreaseTheCart: (userId, orderId, productId, update) => {
            dispatch(decreaseCart(userId, orderId, productId))
            .then(() => update());
        },
        removeFromCart: (userId, orderId, productId) => dispatch(removeCart(userId, orderId, productId))
    }
}

export default connect(mapState, mapDispatch)(Item)