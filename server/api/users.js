const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  if (req.user.isAdmin === true) {
    User.findAll()
      .then(users => res.json(users))
      .catch(next);
    }
  else throw new Error('You must be logged in as an admin to view this api.');
});

router.get('/:id', (req, res, next) => {
  if (req.user.isAdmin === true || req.user.id === req.params.id) {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(next);
    }
  else throw new Error('You are not authorized to view this user\'s profile.');
});

router.get('/:id/orders', (req, res, next) => {
  if (req.user.isAdmin === true || req.user.id === req.params.id) {
    Order.findAll({
      where: {
        userId: req.params.id
      }
    })
      .then(orders => res.json(orders))
      .catch(next);
    }
  else throw new Error('You are not authorized to view this user\'s order history.');
});

// router.post('/', (req, res, next) => {
//   const { name, password } = req.body;
//   User.create({
//     name,
//     password
//   })
//     .then(user => res.status(201).send(user))
//     .catch(next);
// });

router.put('/:id', (req, res, next) => {
  if (req.user.isAdmin === true || req.user.id === req.params.id) {
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
    }
  else throw new Error('You are not authorized to edit this user\'s information.');
});

router.delete('/:id', (req, res, next) => {
  if (req.user.isAdmin === true || req.user.id === req.params.id) {
    User.destroy({ where: { id: req.params.id } })
    .then(user => res.send(user))
    .catch(next);
  }
  else throw new Error('You are not authorized to delete this user.');
});