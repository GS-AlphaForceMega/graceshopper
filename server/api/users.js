const router = require('express').Router()
const { User, Order, Product, OrderProduct } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  if (req.user && req.user.isAdmin === true) {
    User.findAll()
      .then(users => res.json(users))
      .catch(next);
    }
  else throw new Error('You must be logged in as an admin to view this api.');
});

router.get('/:id', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req,user && req.user.id === Number(req.params.id)) {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(next);
    }
  else throw new Error('You are not authorized to view this user\'s profile.');
});

router.get('/:id/orders', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
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

router.get('/:id/orders/latest', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
    // find all orders that have not been placed for this user (should only be one)
    Order.findAll({
      where: {
        userId: req.params.id,
        placed: false
      },
      include: [
        {model: Product}
    ]
    })
    .then(orders => {
      //if there is more than one unplaced order will return the most recent
      return orders.reduce((currOrder, nextOrder) => {
        return currOrder.createdAt > nextOrder.createdAt ? currOrder : nextOrder
      }, {})
    })
    .then(order => {
      //send the product and quantity of each to be set on the state, if it exists
      if (!order.products) {
        res.send(undefined)
      } else {
        res.send(order.products.map(product => {
          return {product, quantity: product.orderProduct.quantity}
        }))
      }
    })
    .catch(next);
    }
  else throw new Error('You are not authorized to view this user\'s order history.');
});
//this should add to the through table with the right user and product and quantity
//order.addProduct(product, through: {quantity: 1})

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
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
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
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
    User.destroy({ where: { id: req.params.id } })
    .then(user => res.send(user))
    .catch(next);
  }
  else throw new Error('You are not authorized to delete this user.');
});