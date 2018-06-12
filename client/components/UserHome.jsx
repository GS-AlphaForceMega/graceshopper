import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderHistory from './OrderHistory.jsx';
import { Segment, Button, Divider } from 'semantic-ui-react'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { email, name, id } = this.props.user;

    return (
      <div>
        <Segment padded>
        <h2>Welcome,</h2>
        <h1>   {name}!</h1>
        <h3>{email}</h3>
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
