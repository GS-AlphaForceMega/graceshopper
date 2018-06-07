const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/restaurants', require('./restaurants'))
router.use('/paymetMethods', require('./paymentMethods'))//CG: note this is spelled wrong.
router.use('/cart', require('./cart'))
router.use('/orders', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
