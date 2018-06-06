const db = require('../db');
const Sequelize = require('sequelize');

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    cuisine: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.coastal.com/thelook/wp-uploads/2015/02/Dogs-in-Derek-Cardigans-0109.jpg'
    },
    streetAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    town: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fullAddress: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.getDataValue('streetAddress')
                + ', ' + this.getDataValue('town')
                + ' ' + this.getDataValue('zipCode');
        }
    },
    rating: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0,
            max: 5
        }
    }
});

module.exports = Restaurant;