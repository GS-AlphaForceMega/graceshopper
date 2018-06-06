const router = require('express').Router();
const Cart = require('../db/models/cart');
module.exports = router;



router.get('/:userId', (req, res, next) => {
    let userId = req.params.userId;
    Cart.findById(userId)
        .then(cart => res.json(cart))
        .catch(next);
});
