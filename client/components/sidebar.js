import React, { Component } from 'react';
import {connect} from 'react-redux'
import store, {addRestaurantId, removeRestaurantId, fetchRestaurants} from '../store';
import {changeSearch} from '../store'

const restaurants = [{id: 1, name: 'Chinese Food'}, {id: 2, name: 'Mexican Food'}];

class Sidebar extends Component  {
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this)
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

    render(){
        const products = this.props.products;
        const restaurants = this.props.restaurants;
        return (
            <div>
                <div>
                   <h2>Search</h2>
                   <input name='searchInput' placeholder="Restarant name..." 
                   value={this.props.searchBar} onChange={this.handleChange}/>
                </div>
                <div>
                    <h2>Search</h2>
                    {
                        restaurants.map(restaurant => {
                            return (
                                <div key={restaurant.id}>
                                    <input onClick={this.onClickHandler} id={restaurant.id} type='checkbox' name='restaurant' value={restaurant.id} />
                                    <label for={restaurant.id}>{restaurant.name}</label>
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
      searchBar: state.searchBar
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