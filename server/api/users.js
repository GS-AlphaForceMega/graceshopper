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
<<<<<<< HEAD
  Order.findAll({
    where: {
      userId: req.params.id
    }
  })
=======
  Order.findAll({ where: { userId: req.params.id } })
>>>>>>> c362a89ebd8635f1e25cdde32a2cceb1ed4aa017
    .then(orders => res.json(orders))
    .catch(next);
});

router.post('/', (req, res, next) => {
<<<<<<< HEAD
  const { name, password } = req.body;
  User.create({
    name,
    password
  })
=======
  User.create(req.body)
>>>>>>> c362a89ebd8635f1e25cdde32a2cceb1ed4aa017
    .then(user => res.send(user))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
<<<<<<< HEAD
  const { name, password } = req.body;
  User.update({
    name,
    password
  }, {
    where: {
      id: req.params.id
    }
  })
=======
  User.update(req.body, { where: { id: req.params.id } })
>>>>>>> c362a89ebd8635f1e25cdde32a2cceb1ed4aa017
    .then(user => res.json(user))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  User.destroy({ where: { id: req.params.id } })
    .then(user => res.send(user))
    .catch(next);
});