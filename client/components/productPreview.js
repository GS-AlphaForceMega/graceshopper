import React from 'react';

const ProductPreview = (props) =>  {
        const product = props.product;
        return (
            <div className="product_Preview">
                <div className="product_image">
                    <img className="preview-img" src={product.imageUrl} />
                </div>
                <div className="product_details">
                    <div><h2>{product.name}</h2></div>
//                     <div><h2>Original: ${product.originalPrice}</h2></div>
//                     <div><h2>You Pay: ${product.salePrice}</h2></div>
                    <div><h2>{product.price}</h2></div>
                    <div><h2>{product.review}</h2></div>
                </div>
            </div>
        )
}

export default ProductPreview;
