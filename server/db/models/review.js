const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    validate: {
        minTenCharacters() {
            if (this.content.length < 10) throw new Error('Review must be at least ten characters long')
        }
    }
});

module.exports = Review;
