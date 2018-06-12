const router = require('express').Router()
const { User, Order, Product, OrderProduct } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  if (req.user && req.user.isAdmin === true) {
    User.findAll()
      .then(users => res.json(users))
      .catch(next);
    }
    else {
      res.statusCode(402).send('You must be logged in as an admin to view this api.');
    }
});

router.get('/:id', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(next);
    }
    else {
      res.statusCode(402).send('You are not authorized to view this user\'s profile.');
    }
});

router.get('/:id/orders', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
    Order.findAll({
      where: {
        userId: req.params.id,
        placed: true
      },
      include: [{
        model: Product
      }]
    })
      .then(orders => res.json(orders))
      .catch(next);
    }
    else {
      res.statusCode(402).send('You are not authorized to view this user\'s order history.');
    }
  });

router.get('/:id/orders/cart', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
    // find all orders that have not been placed for this user (should only be one)
    Order.findOne({
      where: {
        userId: req.params.id,
        placed: false
      },
      include: [
        {model: Product}
    ]
    })
    .then(order => {

      if (!order) {
        return Order.create({
          userId: Number(req.params.id)
        })
      } else {
        return order
      }
    })
      .then(order => {
      let cart = []
      if (order.products) {
        cart = order.products.map(product => {
          return {product, quantity: product.orderProduct.quantity}
        });
      }
      res.send({cart, orderId: order.id});
    })
    .catch(next);
    }
    else {
      res.statusCode(402).send('You are not authorized to view this user\'s order history.');
    }
});
//this should add to the through table with the right user and product and quantity
//order.addProduct(product, through: {quantity: 1})

router.post('/:id/orders', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
  const { orderId, productId, quantity } = req.body;
  let findOrder = Order.findById(orderId);
  let findProduct = Product.findById(productId);
  return Promise.all([findOrder, findProduct])
  .then(([order, product]) => {
    return order.addProduct(product, { through: { quantity: quantity }})
  })
  .then(() => {
    return Order.findById(orderId, {
      include: [{model: Product}]
    })
  })
  .then(updatedOrder => {
    let cart = []
    if (updatedOrder.products) {
      cart = updatedOrder.products.map(product => {
        return {product, quantity: product.orderProduct.quantity}
      });
    }
    res.send({cart, orderId: updatedOrder.id});
  })
  .catch(next)
    }
    else {
      res.statusCode(402).send('You are not authorized to view this user\'s order history.');
    }
});

router.delete('/:id/orders/:orderId/:productId', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
    const { orderId, productId } = req.params;
    return OrderProduct.destroy({
      where: {
        orderId: orderId,
        productId: productId
      }
    })
    .then(deleted => {
      res.status(204).send('succesfully deleted')
    })
    .catch(next)
  }
  else {
    res.statusCode(402).send('You are not authorized to view this user\'s order history.');
  }
});

router.put('/:id/orders/increase', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
      const { orderId, productId } = req.body;
        OrderProduct.findOne({
          where: {
            orderId: orderId,
            productId: productId
          }
        })
        .then(subOrder => {
          let num = subOrder.quantity + 1;
          return subOrder.update({quantity: num})
        })
        .then(updatedSubOrder => res.send(updatedSubOrder))
    .catch(next);
    }
    else {
      res.statusCode(402).send('You are not authorized to view this user\'s order history.');
    }
});

router.put('/:id/orders/decrease', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
      const { orderId, productId } = req.body;
        OrderProduct.findOne({
          where: {
            orderId: orderId,
            productId: productId
          }
        })
        .then(subOrder => {
          let num = subOrder.quantity - 1;
          return subOrder.update({quantity: num})
        })
        .then(updatedSubOrder => res.send(updatedSubOrder))
    .catch(next);
    }
    else {
      res.statusCode(402).send('You are not authorized to view this user\'s order history.');
    }
});

router.put('/:id/orders/:orderId', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
      const { id, orderId } = req.params;
      return Order.findOne({
        where: {
          id: orderId
        }
      })
      .then(order => {
        order.update({placed: true})
      })
      .then(() => {
        res.status(201).send(`Order#${orderId} has been placed`)
      })
    }
    else {
      res.statusCode(402).send('You are not authorized to view this user\'s order history.');
    }
});

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
    else {
      res.statusCode(402).send('You are not authorized to edit this user\'s information.');
    }
});

router.delete('/:id', (req, res, next) => {
  if (req.user && req.user.isAdmin === true || req.user && req.user.id === Number(req.params.id)) {
    User.destroy({ where: { id: req.params.id } })
    .then(user => res.send(user))
    .catch(next);
  }
  else {
    res.statusCode(402).send('You are not authorized to delete this user.');
  }
});
