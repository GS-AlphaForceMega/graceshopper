const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
    total: {
        type: Sequelize.VIRTUAL,
        get() {
            this.getDataValue('items').reduce((item1, item2) => item1.price + item2.price);
        }
    }
});