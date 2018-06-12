import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart, removeCart } from '../store/cart'

const HistoryItem = (props) => {
    console.log('@@@@@@@@@', props)
    const item = props.item;
    return (
        <div className="item">
            <Link to={`/products/${item.id}`}>
                <div className="item_image">
                    <img className="preview-img" src={item.imageUrl} />
                </div>
                <div className="item_details">
                    <div><h2>{item.name}</h2></div>
                    <div><h2>Final Price: ${item.price}</h2></div>
                    <div><h3>{item.description}</h3></div>
                </div>
            </Link>
            <h2>{item.orderProduct.quantity}</h2>
        </div>
    )
}



export default HistoryItem