const db = require('../db');
const Sequelize = require('sequelize');

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    coordinates: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL)
    },
    address: {
        
    },
    rating: {
        type: Sequelize.DECIMAL,
        allowNull: true
    }
});