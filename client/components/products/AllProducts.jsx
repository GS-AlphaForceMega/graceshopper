import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductPreview from './ProductPreview.jsx';
import { fetchProducts, fetchCart } from '../../store';
import Sidebar from '../Sidebar.jsx';


class AllProducts extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getProducts();
    console.log('**&*&%$^&**YGVJj',this.props)
    if (this.props.user.id) {
      this.props.getCart(this.props.user.id);
    }

  }

  render() {
    const restaurantIds = this.props.restaurantIds;
    const searchBar = this.props.searchBar;
    const cuisines = this.props.cuisines;
    //starting with all the products means you can filter it as needed
    let filteredProducts = this.props.products;
    //if there are restaurantIds you want to filter the products, if not then you should not filter the products
    if (restaurantIds.length >= 1) {
      filteredProducts = filteredProducts.filter(product => {
        return product.restaurant === null
          ? false
          : restaurantIds.includes(product.restaurant.id);
      });
    }
    //if there is a search you want to filter the products, if not then dont
    if (searchBar.length >= 1) {
      filteredProducts = filteredProducts.filter(product => {
        return product.name.includes(searchBar);
      });
    }
    if (cuisines.length >= 1) {
      filteredProducts = filteredProducts.filter(product => {
        return product.cuisine === null
          ? false
          : cuisines.includes(product.cuisine);
      });
    }
    return (
        <div className="catalog">
        {console.log('&&&&&&&&&&',this.props.user)}
            <Sidebar />
            <div>
              <Link to='/order/history'>Order History</Link>
                <div className="all-products">
                    {//check if there are any products if none go to last : for a message otherwise you will display products
                    this.props.products.length >= 1 ? (
                        //if there are products, are there any left after filtering? if no you display a message
                        //otherwise you map all the products that have not been filtered
                        filteredProducts.length >= 1 ? (
                        // if yes then map those products
                        filteredProducts.map(product => {
                            return (
                            <div key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                <ProductPreview product={product} />
                                </Link>
                                {
                                    this.props.user.isAdmin ? (
                                        <Link to={`edit/products/${product.id}`} user={this.props.user}>
                                            <button>Edit</button>
                                        </Link>
                                    ) : null
                                }
                            </div>
                            );
                        })
                        ) : (
                        //if no filtered products then the search is too strict display message
                        <h2>There are no deals which meet the current search criteria</h2>
                        )
                    ) : (
                        //if there are no products then display this message
                        <h2>There are currently no deals for sale</h2>
                    )}
                </div>
            </div>
        </div>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    products: state.products,
    restaurantIds: state.restaurantIds,
    searchBar: state.searchBar,
    cuisines: state.cuisines,
    user: state.user,
  };
};
const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    getCart: (userId) => dispatch(fetchCart(userId))
  };
};

export default connect(
  mapState,
  mapDispatch
)(AllProducts);
