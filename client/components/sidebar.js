import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Sidebar extends Component  {
    


    render(){
        const products = props.products;
        const restaurants = props.restaurants;
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
                                    <input id={restaurant.id} type='checkbox' name='restaurant' value={restaurant.id} />
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