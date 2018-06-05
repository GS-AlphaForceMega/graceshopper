import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


export default class ProductPreview extends Component  {


    render(){
        const product = props.product;
        return (
            <div className="product_Preview">
                <div className="product_image">
                    <img src={product.imageUrl} />
                </div>
                <div className="product_details">
                    <div><h2>{product.name}</h2></div>
                    <div><h2>{product.description}</h2></div>
                    <div><h2>{product.originalPrice}</h2></div>
                    <div><h2>{product.salePrice}</h2></div>
                    <div><h2>{product.review}</h2></div>
                </div>
            </div>
        )
    }
    
}
