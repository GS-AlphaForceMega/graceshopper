const router = require('express').Router();
const Order = require('../db/models/order');
module.exports = router;



router.get('/:userId', (req, res, next) => {
    let userId = req.params.userId;
    Order.findAll({
        where: {userId}
    })
        .then(orders => res.json(orders))
        .catch(next);
});
