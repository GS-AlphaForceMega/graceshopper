import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Item from './Item.jsx';

const items = [{id: 1, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 100, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 2, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 110, salePrice: 50, review: '****', restaurant:{id: 1}},
{id: 3, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 105, salePrice: 50, review: '****', restaurant:{id: 2}},
{id:4, name: 'Rice', imageUrl: 'https://fgarciafoods.com/wp-content/uploads/2015/08/products-33.jpg', originalPrice: 120, salePrice: 50, review: '****', restaurant:{id: 2}}]

class Cart extends Component  {

    render(){
        return (
            <div>
                <div className="all-items">
                    {
                        this.props.items.map(item => {
                            <Link to={`/products/${item.id}`} key={item.id} ><Item item={item}/></Link>
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
      //change to state.items
      items: items
    }
  } 

  export default connect(mapState)(Cart)
