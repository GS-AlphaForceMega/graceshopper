import React from 'react';

const ProductPreview = (props) =>  {
        const product = props.product;
        return (
            <div className="product_Preview">
                <div className="product_image">
                    <img className="preview-img" src={product.imageUrl} />
                </div>
                <div className="product_details">
                    <h3>{product.restaurant.name}</h3>
                    <div><h2>{product.name}</h2></div>
                    <div><h3>Final Price: ${product.price}</h3></div>
                    <div><h3 id="availability">{product.availability ? (product.quantity > 5 ? '' : 'Just ' + product.quantity + ' left! Hurry up!')   : 'Deal Sold Out' }</h3></div>
                </div>
            </div>
        )
}

export default ProductPreview;
