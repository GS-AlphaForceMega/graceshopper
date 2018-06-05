const router = require('express').Router();
const Restaurant = require('../db/models/restaurant');
module.exports = router;

router.get('/', (req, res, next) => {
    Restaurant.findAll()
        .then(products => res.json(products))
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    Restaurant.findById(req.params.id)
        .then(product => res.json(product))
        .catch(next);
});

router.post('/', (req, res, next) => {
    Restaurant.create(req.body)
        .then(product => res.send(product))
        .catch(next);
});

router.put('/:id', (req, res, next) => {
    Restaurant.update(req.body, { where: { id: req.params.id } })
        .then(product => res.json(product))
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Restaurant.destroy({ where: { id: req.params.id } })
        .then(product => res.send(product))
        .catch(next);
});