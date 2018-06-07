const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false, //CG: not empty true as well. RATING maybe out of 5 stars?
    }
}, {
    validate: {
        minTenCharacters() {
            if (this.content.length < 10) throw new Error('Review must be at least ten characters long')
        }
    }
});

module.exports = Review;
