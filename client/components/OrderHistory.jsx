import React, { Component } from 'react';
import Item from './Item';

class OrderHistory extends Component {

    super() {
        
    }

    render() {
        const { orders } = this.props.orders;
        return (
            <div className="orderHistory">{
                orders.map(order => (
                    <div className="orderHistory-order" key={order.id}>{
                        order.items.map(item => (<Item item={item} key={item.id} />))
                    }</div>
                ))
            }</div>
        )
    }

}