import React, { Component } from 'react';
import {connect} from 'react-redux'
import store, {addRestaurantId, removeRestaurantId, fetchRestaurants} from '../store';
import {changeSearch, addCuisine, removeCuisine} from '../store'

const restaurants = [{id: 1, name: 'Chinese Food'}, {id: 2, name: 'Mexican Food'}];

class Sidebar extends Component  {
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.cuisineClickHandler = this.cuisineClickHandler.bind(this)
    }

    componentDidMount(){
        this.props.getRestaurants()
    }

    onClickHandler (event){
        const restaurantId = event.target.value;
        if(event.target.checked){
            store.dispatch(addRestaurantId(restaurantId));
        } else {
            store.dispatch(removeRestaurantId(restaurantId));
        }
    }

    handleChange(event) {
        this.props.changeSearch(event.target.value);
    }

    cuisineClickHandler(event) {
        const cuisine = event.target.value;
        if (event.target.checked) {
            store.dispatch(addCuisine(cuisine))
        } else {
            store.dispatch(removeCuisine(cuisine))
        }
    }

    render(){
        const products = this.props.products;
        const restaurants = this.props.restaurants;
        const cuisines = this.props.cuisines.reduce((a,b) => {
            //if cuisines become arrays do a for loop and concat as needed then return a
            if (!a.includes(b)){
                a = a.concat(b)
            }
            return a
        }, [])
        // this.props.cuisines.forEach(cuisine => {
        //     if (!cuisines.includes(cuisine)) {
        //         cuisines.push(cuisine)
        //     }
        // })
        return (
            <div className="sidebar">
                <div>
                   <h2>Search By Deal Name</h2>
                   <input name='searchInput' placeholder="Deal name..."
                   value={this.props.searchBar} onChange={this.handleChange}/>
                </div>
                <div>
                    <h2>Search By Restaurant</h2>
                    {
                        restaurants.map(restaurant => {
                            return (
                                <div key={restaurant.id}>
                                    <input onClick={this.onClickHandler} id={restaurant.id} type='checkbox' name='restaurant' value={restaurant.id} />
                                    <label htmlFor={restaurant.id}>{restaurant.name}</label>
                                </div>
                            )
                        })
                    }
                    <h2>Search By Cuisine</h2>
                    {
                        cuisines.map(cuisine => {
                            return (
                                <div key={cuisine}>
                                    <input onClick={this.cuisineClickHandler} type='checkbox' name='cuisine' value={cuisine} />
                                    <label htmlFor={cuisine}>{cuisine}</label>
                                </div>
                            )
                        })
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
      restaurants: state.restaurants,
      searchBar: state.searchBar,
      cuisines: state.products.map(product => {
        return product.cuisine
      })
    }
  }
const mapDispatch = dispatch => {
    return {
        getRestaurants: () => dispatch(fetchRestaurants()),
        changeSearch: (search) => dispatch(changeSearch(search))
    }
}


export default connect(mapState, mapDispatch)(Sidebar)

  /**
   * PROP TYPES
   */
//   Sidebar.propTypes = {
//     handleClick: PropTypes.func.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired
//   }
