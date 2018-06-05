import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Sidebar extends Component  {

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