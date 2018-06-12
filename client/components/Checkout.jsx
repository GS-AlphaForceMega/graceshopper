import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './stripeConstants/stripe';
import PAYMENT_SERVER_URL from './stripeConstants/server';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert(`Payment Successful!`);
};
const placeOrder = data => {
   axios.put(`/${props.userId}/orders/${props.orderId}`)
  .then((message => {
    console.log(message)
  }))
  .catch(console.error)
}

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .then(placeOrder)
    .catch(errorPayment);



const Checkout = ({ name, description, amount }) =>
    <StripeCheckout
      name={name}
      description={description}
      amount={fromDollarToCent(amount)}
      token={onToken(amount, description)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />

  export default Checkout;
