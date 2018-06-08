const router = require('express').Router()
const { User } = require('../db/models')
const chalk = require('chalk');
module.exports = router


router.get('/', (req, res, next) => {
  console.log(chalk.magenta(req.session));
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
  Order.findAll({
    where: {
      userId: req.params.id
    }
  })
    .then(orders => res.json(orders))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { name, password } = req.body;
  User.create({
    name,
    password
  })
    .then(user => res.send(user))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const { name, password } = req.body;
  User.update({
    name,
    password
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(user => res.json(user))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(user => res.send(user))
    .catch(next);
});