const db = require('../db');
const Sequelize = require('sequelize');
const Order = require('./order');

const OrderProduct = db.define('orderProduct', {
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        validate: {
            min: 1
        }
    },
    price: {
        type: Sequelize.INTEGER,
        defaultValue: null
    }
});