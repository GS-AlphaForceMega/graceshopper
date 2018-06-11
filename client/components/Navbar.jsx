import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { Button, Menu, Icon, Label } from 'semantic-ui-react';

const itemCounter = 0;
const userId = 2;


const Navbar = ({ handleClick, isLoggedIn, user, cart }) => (
  <div>
    <Menu className="header-nav">
      <div>
        <Link to="/">
          <h1 className="site-title">
            <i>MealDeals</i>
          </h1>
        </Link>
      </div>
      <div className="header-right header-padding">
        <Link to="/cart">
          <Menu.Item>
            <Button positive>
              <Icon name="shop" />
              Cart<em> </em>
              <string style={{ color: 'teal' }}>{cart.reduce((counter, item) => {
                return counter + item.quantity;
              }, 0)}</string>
            </Button>
          </Menu.Item>
        </Link>
        {isLoggedIn ? (
          <div className="header-right">
            <Link to={`/user/:${user.id}`}>
              <Menu.Item>
                <Button primary>My Account</Button>
              </Menu.Item>
            </Link>
            <Link to="/">
              <Menu.Item>
                <Button onClick={handleClick}>Logout</Button>
              </Menu.Item>
            </Link>
          </div>
        ) : (
          <div className="header-right">
            <Link to="/login">
              <Menu.Item>
                <Button primary>Log-in</Button>
              </Menu.Item>
            </Link>
            <Link to="/signup">
              <Menu.Item>
                <Button>Sign up</Button>
              </Menu.Item>
            </Link>
          </div>
        )}
      </div>
    </Menu>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart,
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
