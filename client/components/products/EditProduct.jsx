import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProduct, editCurrentProduct } from '../../store/currentProduct';
import axios from 'axios';
import store from '../../store'
import history from '../../history'

//should this push to new history of updated product????
//would probably be better to have a change handler that updates the store state
//with the new info, it will only be committed if submitted


export class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().currentProduct;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState().currentProduct)
        })
        let productId = Number(this.props.match.params.productId)
        axios.get(`/api/products/${productId}`)
            .then(res => res.data)
            .then(product => {
                this.setState(product);
            })
            .catch(console.error)
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.submitEdit(this.state);
        history.push(`/products/${this.state.id}`);
    }

    render() {
        const product = this.state;
        const { user } = this.props;
        return (
            <div>
                {
                    user && user.isAdmin ?
                        product.name ? (
                            <form onSubmit={this.handleSubmit}>
                                <label>Name</label>
                                <input name="name" value={this.state.name} onChange={this.handleChange} />
                                <label>imageUrl</label>
                                <input name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                                <label>Price</label>
                                <input name="price" value={this.state.price} onChange={this.handleChange} />
                                <label>Description</label>
                                <input name="description" value={this.state.description} onChange={this.handleChange} />
                                <label>Quantity</label>
                                <input name="quantity" value={this.state.quantity} onChange={this.handleChange} />
                                <button type="submit">Edit Product</button>
                            </form>
                        ) : (<h3>Product not found.</h3>)
                    : (<h3>You must be logged in as an admin to edit products.</h3>)
                }
            </div>
        )
    }

}

const mapState = state => {
    return {
        user: state.user,
    }
}

const mapDispatch = dispatch => {
    return {
        getProduct: (productId) => dispatch(fetchProduct(productId)),
        submitEdit: (editedProduct) => dispatch(editCurrentProduct(editedProduct))
    }
}

export default connect(mapState, mapDispatch)(EditProduct)
