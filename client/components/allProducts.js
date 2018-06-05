import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'





class AllProducts extends Component  {

    render(){
        return (
            <div>
                <div>
                    {
                        props.products.map(product => {
                            return <Link to={`/products/${product.id}`}><ProductPreview product={product}/></Link>;
                        })
                    }
                </div>
            </div>
        )
    }
    
}

const mapState = state => {
    return {
      isLoggedIn: !!state.user.id
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      }
    }
  }
  

export default connect(mapState, mapDispatch)(AllProducts)
