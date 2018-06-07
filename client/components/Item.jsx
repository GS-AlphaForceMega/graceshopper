import React from 'react';

const Item = (props) =>  {
        const item = props.item;
        return (
            <div className="item">
                <div className="item_image">
                    <img className="preview-img" src={item.imageUrl} />
                </div>
                <div className="item_details">
                    <div><h2>{item.name}</h2></div>
                    <div><h2>{item.originalPrice}</h2></div>
                    <div><h2>{item.salePrice}</h2></div>
                    <div><h2>{item.review}</h2></div>
                </div>
            </div>
        )
}

export default Item;
