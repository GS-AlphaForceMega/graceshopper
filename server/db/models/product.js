const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.coastal.com/thelook/wp-uploads/2015/02/Dogs-in-Derek-Cardigans-0109.jpg'
    },
    price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    availability: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    limitedQuantity: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    limitedTime: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    expirationDate: {
        type: Sequelize.DATE
    }
});

module.exports = Product;