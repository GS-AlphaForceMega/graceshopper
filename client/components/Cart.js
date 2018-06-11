import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Item from './Item.jsx';
import Checkout from './Checkout';



class Cart extends Component  {

    render(){
        return (
            <div>
                <div className="all-items">
                    {
                        this.props.cart.map(item => {
                            return <Link to={`/products/${item.id}`} key={item.id} ><Item item={item}/></Link>
                        })
                    }
                </div>
                <h1>Cart Total: ${this.props.cart.reduce((sum, item) => {
                    return sum + Number(item.salePrice)
                }, 0)}</h1>


<Checkout
  name={'The best deals in your city'}
  description={'Enter valid email for getttin tickets'}
  amount={1}
/>

            </div>
        )
    }

}

const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      cart: state.cart
    }
  }

  export default connect(mapState)(Cart)
