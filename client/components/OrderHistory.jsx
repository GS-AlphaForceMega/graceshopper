import React, { Component } from 'react';
import HistoryItem from './HistoryItem.jsx';
import { connect } from 'react-redux';
import axios from 'axios';

class OrderHistory extends Component {
    constructor() {
        super()
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        axios.get(`/api/users/${this.props.user.id}/orders`)
            .then(res => res.data)
            .then(orders => this.setState({ orders }))
            .catch(err => console.error(err))
    }

    render(props) {
        const { orders } = this.state;
        return (
            <div className="orderHistory">{
                orders.map(order => (
                    <div className="orderHistory-order" key={order.id}>{
                        order.products.map(item => (<HistoryItem item={item} key={item.id} />))
                    }</div>
                ))
            }</div>
        )
    }

}

const mapState = state => {
    return {
        user: state.user
    };
}

export default connect(mapState)(OrderHistory);
