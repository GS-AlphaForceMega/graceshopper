import React, { Component } from 'react';
import {connect} from 'react-redux'
import { editProduct } from '../store/products';
import { fetchProduct, updateProduct } from '../store/currentProduct';
import axios from 'axios';

//should this push to new history of updated product????
//would probably be better to have a change handler that updates the store state
//with the new info, it will only be committed if submitted


export class EditProduct extends Component  {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let productId = Number(this.props.match.params.productId)
        axios.get(`/api/products/${productId}`)
        .then(res => res.data)
        .then(product => {
            this.setState(product);
        })
        .catch(console.error)

        // this.props.getProduct(+this.props.match.params.productId)
        // .then( () => {
        //     this.setState(this.props.product)
        // })
        
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        this.props.submitEdit(this.state);
    }

    render(){
        const product = this.state;
        return (
            <div>
                {console.log(this.state)}
                {   
                    !!product ?
                <form onSubmit={this.handleSubmit}>
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

export default connect(null, mapDispatch)(EditProduct)
