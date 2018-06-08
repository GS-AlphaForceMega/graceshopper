const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'http://www.gustame-dubrovnik.com/wp-content/uploads/2017/08/Copy-of-BG4A0518-400x400.jpg'
    },
    price: {
        type: Sequelize.DECIMAL(10 ,2),
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    // availability: {
    //     type: Sequelize.BOOLEAN,
    //     defaultValue: true
    // },
    // limitedQuantity: {
    //     type: Sequelize.BOOLEAN,
    //     defaultValue: false
    // },
    // limitedTime: {
    //     type: Sequelize.BOOLEAN,
    //     defaultValue: false
    // },
    // expirationDate: {
    //     type: Sequelize.DATE
    // }
});

module.exports = Product;