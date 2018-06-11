import React from 'react';

const Item = (props) =>  {
        const item = props.item;
        const itemId = item.id;
        return (
            <div className="item">
                <div className="item_image">
                    <img className="preview-img" src={item.imageUrl} />
                </div>
                <div className="item_details">
                    <div><h2>{item.name}</h2></div>
                    <div><h2>Original: ${item.originalPrice}</h2></div>
                    <div><h2>You Pay: ${item.salePrice}</h2></div>
                    <div><h2>{item.review}</h2></div>
                </div>
                <button onClick={(orderId, itemId) => props.increaseCart}>Add</button>
                <button onClick={(orderId, itemId) => props.decreaseCart}>Remove</button>
            </div>
        )
}

export default Item;
