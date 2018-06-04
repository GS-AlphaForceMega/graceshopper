const db = require('../db');
const Sequelize = require('sequelize');

const PaymentMethod = db.define('paymentMethod', {
    cardNumber: {

    },
    CVV: {

    },
    billingAddress: {

    }
});