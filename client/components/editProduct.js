import React, { Component } from 'react';
import {connect} from 'react-redux'
import { editProduct } from '../store/products';
import { fetchProduct, updateProduct } from '../store/currentProduct';

//should this push to new history of updated product????
//would probably be better to have a change handler that updates the store state
//with the new info, it will only be committed if submitted


export class EditProduct extends Component  {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getProduct(+this.props.match.params.productId)
        .then( () => {
            this.setState(this.props.product)
        })
        
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitEdit(this.state);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    render(){
        const product = this.state;
        return (
            <div>
                {   
                    !!product ?
                <form onSubmit={this.handSubmit}>
                    <input name="name" value={this.state.name} onChange={this.handleChange} />
                    <input name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                    <input name="originalPrice" value={this.state.originalPrice} onChange={this.handleChange} />
                    <input name="salePrice" value={this.state.salePrice} onChange={this.handleChange} />
                    <input name="review" value={this.state.review} onChange={this.handleChange} />
                    <button type="submit">Edit Product</button>
                </form>
                : null
                
                }
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
    product: state.currentProduct
    }
  }
  
const mapDispatch = dispatch => {
    return {
        getProduct: (productId) => dispatch(fetchProduct(productId)),
        submitEdit: (editedProduct) => dispatch(editProduct(editedProduct))
    }
}

export default connect(mapState, mapDispatch)(EditProduct)
