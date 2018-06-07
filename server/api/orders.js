const router = require('express').Router();
const Order = require('../db/models/order');
module.exports = router;

// bafdofdbfoib.com/api/orders/1    (userID??!???!@?#?!?@#)
//THIS SHOULD MOVE TO USERS
// /api/users/:userId/orders
router.get('/:userId', (req, res, next) => {
    let userId = req.params.userId;
    Order.findAll({
        where: { userId }
    })
        .then(orders => res.json(orders))
        .catch(next);
});

router.put('/:userId', (req, res, next) => {
    let userId = req.params.userId;
    Order.update(req.body, {
        where: { userId, placed: false }
    })
        .then(order => res.json(order))
        .catch(next);
});