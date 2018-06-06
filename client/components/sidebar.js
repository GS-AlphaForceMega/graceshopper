import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Sidebar extends Component  {
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler (){
        
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
                                <div>
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
      products: 
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      }
    }
  }
  
  export default connect(mapState, mapDispatch)(Navbar)
  
  /**
   * PROP TYPES
   */
  Navbar.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  }