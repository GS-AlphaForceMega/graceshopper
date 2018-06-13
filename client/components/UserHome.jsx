import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderHistory from './OrderHistory.jsx';
import { Segment, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export class UserHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { email, name, id, isAdmin } = this.props.user;

    if (!id) this.props.history.push('/')

    return (
      <div className="user-welcome">
        <Segment padded>
          <h1>Welcome, {name}!</h1>
          <h3>{email}</h3>
          {isAdmin && (
            <div className="admin-home">
              <Link to="/order/all">
                <button>All Orders</button>
              </Link>
              <Link to="/add/product">
                <button>Add Product</button>
              </Link>
            </div>
          )}
          <Divider horizontal>Your orders</Divider>
        </Segment>
        <OrderHistory />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  user: PropTypes.object,
};
