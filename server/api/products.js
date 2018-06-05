const router = require('express').Router();
const Product = require('../db/models/product');
module.exports = router;

router.get('/', (req, res, next) => {
    Product.findAll()
        .then(products => res.json(products))
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(next);
});

router.post('/', (req, res, next) => {
    Product.create(req.body)
        .then(product => res.send(product))
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Product.destroy(req.params.id)
        .then(product => res.send(product))
        .catch(next);
});