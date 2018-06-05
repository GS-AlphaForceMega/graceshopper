const db = require('../db');
const Sequelize = require('sequelize');

const Order = db.define('order', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Order;