import React, { Component } from 'react';
import HistoryItem from './HistoryItem.jsx';
import { connect } from 'react-redux';
import axios from 'axios';

export class AdminAllOrders extends Component {
    constructor() {
        super()
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        axios.get(`/api/users/orders/all`)
            .then(res => res.data)
            .then(orders => this.setState({ orders }))
            .catch(err => console.error(err))
    }

    render(props) {
        const { orders } = this.state;
        const isAdmin = !!this.props.user.isAdmin;
        return (
            <div className="orderHistory">{
                isAdmin ? 
                orders.length > 0 ?
                orders.map(order => (
                    <div className="orderHistory-order" key={order.id}>
                    <h2>Order#{order.id}</h2>
                    <h2>
                        Order Placed: {order.updatedAt.split('T')[0]} {order.updatedAt.split('T')[1].slice(0, 5) }
                    </h2>
                    <div>{
                        order.products.map(item => (<HistoryItem item={item} key={item.id} />))
                    }</div>
                    <h1>Order Total: ${
                        order.products.reduce((sum, product) => {
                            let number = Number(sum) + (Number(product.price) * Number(product.orderProduct.quantity))
                            return Number.parseFloat(number).toFixed(2)
                        }, 0)
                    }</h1>
                    </div>
                )
            )
            : <h2>You have no orders</h2>
            : <h2>You do not have permission to view this page</h2>
            }
            </div>
        )
    }

}

const mapState = state => {
    return {
        user: state.user
    };
}

export default connect(mapState)(AdminAllOrders);
