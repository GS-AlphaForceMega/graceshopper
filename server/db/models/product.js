const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false //CG: we probably want unique names. 
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'http://www.gustame-dubrovnik.com/wp-content/uploads/2017/08/Copy-of-BG4A0518-400x400.jpg'
    },
    price: { 
        type: Sequelize.DECIMAL(10 ,2), //CG: all prices at integers and only display values divided by 100.
        allowNull: false
    },
    availability: { //CG: Be careful to be too in the weeds before we get an MVP
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    cuisine: {
        type: Sequelize.STRING, //CG: ENUM for now if there is only one for each product, Category. 
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    // limitedQuantity: {
    //     type: Sequelize.BOOLEAN,
    //     defaultValue: false
    // },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    // limitedTime: {
    //     type: Sequelize.BOOLEAN,
    //     defaultValue: false
    // },
    // expirationDate: {
    //     type: Sequelize.DATE
    // }
});

module.exports = Product;