import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductPreview from './productPreview';
import {fetchProducts} from '../store/products'


const products = [{id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 105, salePrice: 50, review: '****', restaurant:{id: 2}},
{id:4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 120, salePrice: 50, review: '****', restaurant:{id: 2}}]
const restaurantIds = [1, 2]

class AllProducts extends Component  {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getProducts()
    }

    render(){
        const restaurantIds = this.props.restaurantIds;
        const searchBar = this.props.searchBar;
        //starting with all the products means you can filter it as needed
        let filteredProducts = this.props.products;
        //if there are restaurantIds you want to filter the products, if not then you should not filter the products
        if (restaurantIds.length >= 1) {
            filteredProducts = filteredProducts.filter(product => {
                return restaurantIds.includes(product.restaurant.id)
            })
        }
        //if there is a search you want to filter the products, if not then dont
        if (searchBar.length >= 1) {
            filteredProducts = filteredProducts.filter(product => {
                return product.name.includes(searchBar)
            })
        }        
        return (
            <div>
                <div className="all-products">
                    {   
                        //check if there are any products if none go to last : for a message otherwise you will display products
                        this.props.products.length >= 1 ?
                        //if there are products, are there any left after filtering? if no you display a message
                        //otherwise you map all the products that have not been filtered
                        filteredProducts.length >= 1 ?
                        // if yes then map those products
                        filteredProducts.map(product => {
                            return (<div key={product.id}>
                                <Link to={`/products/${product.id}`} ><ProductPreview product={product}/></Link>
                                <Link to={`edit/products/${product.id}`} ><button>Edit</button></Link>
                            </div>)
                        })
                        //if no filtered products then the search is too strict display message
                        :
                        <h2>There are no deals which meet the current search criteria</h2>
                        :
                        //if there are no products then display this message
                        <h2>There are currently no deals for sale</h2>
                    }
                </div>
            </div>
        )
    }
    
}

const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      products: state.products,
      restaurantIds: state.restaurantIds,
      searchBar: state.searchBar
    }
  }
const mapDispatch = dispatch => {
    return {
        getProducts: () => dispatch(fetchProducts())
    }
} 


export default connect(mapState, mapDispatch)(AllProducts)



