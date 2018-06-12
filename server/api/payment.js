const router = require('express').Router();
const configureStripe = require('stripe');

const {STRIPE_SECRET_KEY} = require('../../secrets').env


const stripe = configureStripe(STRIPE_SECRET_KEY);

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

router.get('/', (req, res) => {
  res.send({
    message: 'Hello Stripe checkout server!',
    timestamp: new Date().toISOString(),
  });
});

router.post('/', (req, res) => {
  stripe.charges.create(req.body, postStripeCharge(res));
});

module.exports = router;
