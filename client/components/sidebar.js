import React, { Component } from 'react';
import {connect} from 'react-redux'
import store, {addRestaurantId, removeRestaurantId} from '../store';

const restaurants = [{id: 1, name: 'Chinese Food'}, {id: 2, name: 'Mexican Food'}];

class Sidebar extends Component  {
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler (event){
        const restaurantId = event.target.value;
        if(event.target.checked){
            store.dispatch(addRestaurantId(restaurantId));
        } else {
            store.dispatch(removeRestaurantId(restaurantId));
        }
        
    }   

    render(){
        const products = this.props.products;
        const restaurants = this.props.restaurants;
        return (
            <div>
                <div>
                   <h2>Search</h2>
                   <input name='searchInput' value="Restarant name..." />
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
      restaurants: restaurants
    }
  }
  
  
  export default connect(mapState)(Sidebar)
  
  /**
   * PROP TYPES
   */
//   Sidebar.propTypes = {
//     handleClick: PropTypes.func.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired
//   }