import React from 'react';
import axios from 'axios';
import history from '../history';
import StripeCheckout from 'react-stripe-checkout';

const aws = require('aws-sdk');

let stripe = new aws.S3({
  STRIPE_PUBLISHABLE: process.env.STRIPE_PUBLISHABLE,
});
const { STRIPE_PUBLISHABLE } = stripe;

import PAYMENT_SERVER_URL from './stripeConstants/server';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert(`Payment Successful!`);
  history.push('/products');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description, orderId, userId) => token =>
  axios
    .put(`/api/users/${userId}/orders/${orderId}`)
    .then(message => {
      console.log(message);
    })
    .then(() => {
      axios
        .post(PAYMENT_SERVER_URL, {
          description,
          source: token.id,
          currency: CURRENCY,
          amount: fromDollarToCent(amount),
        })
        .then(successPayment);
    })
    .catch(errorPayment);

const Checkout = ({ name, description, amount, orderId, userId }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description, orderId, userId)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
