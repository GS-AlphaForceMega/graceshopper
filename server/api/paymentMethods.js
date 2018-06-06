const router = require('express').Router();
const PaymentMethod = require('../db/models/paymentMethod');
module.exports = router;



router.get('/:userId', (req, res, next) => {
    let userId = req.params.userId;
    PaymentMethod.findAll({
        where: {userId}
    })
        .then(paymentMethods => res.json(paymentMethods))
        .catch(next);
});
