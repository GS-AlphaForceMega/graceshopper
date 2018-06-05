const db = require('../db');
const Sequelize = require('sequelize');

const PaymentMethod = db.define('paymentMethod', {
    cardNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    expirationMonth: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 12
        }
    },
    expirationYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 00,
            max: 99
        }
    },
    expirationDate: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.getDataValue('expirationMonth') + '/' + this.getDataValue('expirationYear');
        }
    },
    CVV: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    billingAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = PaymentMethod;