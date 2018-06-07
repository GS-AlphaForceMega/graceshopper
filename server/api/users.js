const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
});

router.get('/:id/orders', (req, res, next) => {
  Order.findAll({ where: { userId: req.params.id } })
    .then(orders => res.json(orders))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(user => res.json(user))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  User.destroy({ where: { id: req.params.id } })
    .then(user => res.send(user))
    .catch(next);
});