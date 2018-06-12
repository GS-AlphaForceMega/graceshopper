import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';
import { Button, Form, Icon, Message } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="auth-div">

      <Message
        attached
        header="Welcome to our site!"
        content={`Fill out the form below to ${(name === 'login' ? 'log in to your' : name === 'signup' ? 'sign up for an' : '')} account:`}
      />

      <Form
        className="auth-form attached fluid segment"
        onSubmit={handleSubmit}
        name={name}
      >

        <div>
          {name === 'signup' ? (
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First Name"
                placeholder="First Name"
                type="text"
                name="firstName"
              />
              <Form.Input
                fluid
                label="Last Name"
                placeholder="Last Name"
                type="text"
                name="lastName"
              />
            </Form.Group>
          ) : (
            <div />
          )}
        </div>
        <Form.Input
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
        />
        <Form.Input label="Password" type="password" name="password" />
        <Form.Checkbox inline label="I agree to the terms and conditions" />
        <Button color="blue" type="submit">
          {displayName}
        </Button>
        {error && error.response && <div style={{color: "red"}} > {error.response.data} </div>}
      </Form>

      <a href="/auth/google" >{displayName} with Google</a>

      {name === 'signup' ? (
        <Message attached="bottom" warning>
          <Icon name="help" />
          Already signed up?&nbsp;<Link to="/login">Login here</Link>&nbsp;instead.
        </Message>
      ) : (
        <Message attached="bottom" warning>
          <Icon name="help" />
          Don't have account?&nbsp;
          <Link to="/signup">Sign Up here</Link>&nbsp;instead.
        </Message>
      )}
    </div>
  );
};


const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => {
  return {

    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const name =  `${formName === 'signup' ?
        evt.target.firstName.value + evt.target.lastName.value
        : null}`
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName, name));
    },
  };
};


export const Login = connect(
  mapLogin,
  mapDispatch
)(AuthForm);
export const Signup = connect(
  mapSignup,
  mapDispatch
)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
