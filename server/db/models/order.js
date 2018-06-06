const db = require('../db');
const Sequelize = require('sequelize');

const Order = db.define('order', {
    items: {
        type: Sequelize.ARRAY(Sequelize.JSON) // [ item = { id, quantity, price } ]
    },
    placed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
    // price: {
    //     type: Sequelize.DECIMAL(10, 2)
    // },
    // quantity: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // }
});

module.exports = Order;