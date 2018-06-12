import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import axios from 'axios';

class OrderHistory extends Component {

    super() {
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.userId}/orders`)
            .then(res => res.data)
            .then(orders => this.setState({ orders }))
            .catch(err => console.error(err))
    }

    render(props) {
        const { orders } = this.props.orders;
        return (
            <div className="orderHistory">{
                orders.map(order => (
                    <div className="orderHistory-order" key={order.id}>{
                        order.items.map(item => (<Item item={item} key={item.id} placed={true} />))
                    }</div>
                ))
            }</div>
        )
    }

}

const mapState = state => {
    return {
        orders: state.orders
    };
}

export default connect(mapState)(OrderHistory);
