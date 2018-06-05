const User = require('./user');
const Order = require('./order');
const Cart = require('./cart');
const Restaurant = require('./restaurant');
const Product = require('./product');
const PaymentMethod = require('./paymentMethod');

Cart.hasMany(Product, { as: 'items' });
Cart.belongsTo(User);
User.hasMany(Order);
Order.hasOne(Product);
Product.belongsTo(Restaurant);
User.hasMany(PaymentMethod);
PaymentMethod.belongsTo(User);

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
// module.exports = {
//   User
// }
