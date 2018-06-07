const User = require('./user');
const Order = require('./order');
const Product = require('./product');
const Review = require('./review');
const OrderProduct = require('./orderProduct');

User.hasMany(Order);
Order.belongsToMany(Product, { through: 'OrderProduct' });
Product.belongsToMany(Order, { through: 'OrderProduct' });
Order.belongsTo(User); //userId should be able to be null
Review.belongsTo(Product);
Review.belongsTo(User);
Product.hasMany(Review);
User.hasMany(Review);

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

module.exports = {
    User,
    Order,
    Product,
    Review,
    OrderProduct
}
