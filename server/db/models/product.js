const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    availability: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    // quantity: {

    // },
    // timeLimit: {

    // }
});