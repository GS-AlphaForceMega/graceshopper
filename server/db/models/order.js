const db = require('../db');
const Sequelize = require('sequelize');

const Order = db.define('order', {
    placed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    total: {
        type: Sequelize.VIRTUAL,
        get() {
            this.getDataValue('items').reduce((item1, item2) => item1.price + item2.price, 0);
        }
    }
});

module.exports = Order;