import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createProduct } from '../../store/products';




export class AddProduct extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            originalPrice: '',
            salePrice: '',
            review: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitProduct(this.state);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input name="name" value={this.state.name} onChange={this.handleChange} />
                    <label>ImageURL</label>
                    <input name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                    <label>Original Price</label>
                    <input name="originalPrice" value={this.state.originalPrice} onChange={this.handleChange} />
                    <label>Sale Price</label>
                    <input name="salePrice" value={this.state.salePrice} onChange={this.handleChange} />
                    <label>Review</label>
                    <input name="review" value={this.state.review} onChange={this.handleChange} />
                    <button type="submit">Add Product</button>
                </form>
            </div>
        )
    }
    
}

const mapState = state => {
    return {
    //   isLoggedIn: !!state.user.id,
      //change to state.products
    //   products: products,
      //change to state.restaurantIds
    //   restaurantIds: state.restaurantIds
    }
  }
  
const mapDispatch = dispatch => {
    return {
        submitProduct: (newProduct) => dispatch(createProduct(newProduct))
    }
}

export default connect(null, mapDispatch)(AddProduct)
