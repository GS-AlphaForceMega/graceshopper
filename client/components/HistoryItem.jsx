import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart, removeCart } from '../store/cart'

const HistoryItem = (props) => {
    console.log('@@@@@@@@@', props)
    const item = props.item;
    return (
        <Link to={`/products/${item.id}`}>
            <div className="item-div">
                <div className="item-div-preview">
                    <div className="item-div-image">
                        <img className="preview-img" src={item.imageUrl} />
                    </div>
                    <div className="item-div-details">
                        <div className="item-div-details"><h2>{item.name}</h2></div>
                        <div className="item-div-details"><h3>{item.description}</h3></div>
                        <div className="item-div-details"><h2>Final Price: ${item.price}</h2></div>
                    </div>
                </div>
                <div className="item-div-quantity">
                    <h4>Quantity:</h4>
                    <h2>{item.orderProduct.quantity}</h2>
                </div>
            </div>
        </Link>
    )
}



export default HistoryItem