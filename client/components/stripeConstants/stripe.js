const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_9eNt7y0neGa5cYmLDpVmwUfq';

export default STRIPE_PUBLISHABLE;
