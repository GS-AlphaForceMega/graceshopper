import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { Button, Menu } from 'semantic-ui-react';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/">
            <h1 className="site-title">MealDeals</h1>
          </Link>
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <Menu className="header">
         <div>
          <Link to="/">
            <h1 className="site-title">
              <i>MealDeals</i>
            </h1>
          </Link>
          </div>
          <div>
          <Link to="/cart">Cart</Link>
          <Link to="/login">
            <Menu.Item>
              <Button primary>Sign up</Button>
            </Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item>
              <Button>Log-in</Button>
            </Menu.Item>
          </Link>
          </div>
        </Menu>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
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
