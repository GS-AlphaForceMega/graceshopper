const db = require('../server/db');
const {Restaurant, Product} = require('../server/db/models');

const names = [
    '2x1 Romantic Dinner', '20%Off dinner special', '10%Off between 4pm-6pm', 'HappyHour - 25%Off', 'BuyOne - GetOne 50%Off', '20% for partys of 10 or more', '2 entrees for 1 - Enjoy!', 'Dessert on Us +$50 purchase'
];

const images = [
    'https://irp-cdn.multiscreensite.com/91ec95fb/dms3rep/multi/tablet/pizza_specials_davis_ca-692x692.png', 'http://www.eatdrinksetx.com/wp-content/uploads/2011/10/eat-drink-daily-specials.jpg.png', 'http://stangentdemo.com/hollywood/wp-content/uploads/2012/11/Specials.jpg', 'http://hockomockswampsupperclub.com/wp-content/uploads/2015/10/wedspecial.png'
];

const prices = [
    10, 20, 30, 40, 50, 60, 31, 41, 61, 81, 100, 25, 35, 45, 55, 65, 75, 9.99, 19.99, 29.99, 49.99, 99.99
];

const quantities = [
    5, 10, 15, 20, 30, 40, 50, 60, 31, 41, 61, 81, 100, 25, 35, 45, 55, 65, 75, 1
];

const descriptions = [
    'Nice deal in a good restaurant', 'Good deal for this Restaurant', 'Best deal in the best Restaurant in Manhattan', 'Indredible offer', 'Best for your money', 'Too good to be truth'
];

const restaurants = [
    {   name: 'TacoBell',
        cuisine: 'mexican',
        imageUrl: 'https://yummy.co.ke/wp-content/uploads/2014/09/Tacos-Mexican-Food.jpg',
        streetAddress: '4322 W 25th St.',
        town: 'Manhattan',
        zipCode: 10002,
        rating: 4
    },
     {   name: 'WanTon',
        cuisine: 'chinesse',
        imageUrl: 'https://img1.10bestmedia.com/Images/Photos/198827/322885-340328829322875-635825131-o_54_990x660_201404231603.jpg',
        streetAddress: '212 E 125th St.',
        town: 'Harlem',
        zipCode: 10021,
        rating: 3.5
    },
     {   name: 'Giussepe',
        cuisine: 'italian',
        imageUrl: 'http://s3.amazonaws.com/etntmedia/media/images/ext/628852948/spaghettiandmeatballs.jpg',
        streetAddress: '980 W 200th St',
        town: 'Inwood',
        zipCode: 10034,
        rating: 4.5
    },
     {   name: 'Cachapas',
        cuisine: 'venezuelan',
        imageUrl: 'http://www.thepetitgourmet.com/wp-content/uploads/2015/06/DSCN8841.jpg',
        streetAddress: '90 Dyckman St',
        town: 'Inwood',
        zipCode: 10034,
        rating: 5
    }
];

// const cuisines = [
//     'chinesse', 'mexican', 'italian', 'venezuelan'
// ];

const restaurantId = () => Math.round(Math.random() * (restaurants.length - 1));
const name = () => names[Math.round(Math.random() * (names.length - 1))];
const imageUrl = () => images[Math.round(Math.random() * (images.length - 1))];
const price = () => prices[Math.round(Math.random() * (prices.length - 1))];
const quantity = () => quantities[Math.round(Math.random() * (quantities.length - 1))];
const description = () => descriptions[Math.round(Math.random() * (descriptions.length - 1))];
const cuisine = () => cuisines[Math.round(Math.random() * (cuisines.length - 1))];

const createProduct = (num) => {
    let products = [];
    for (let i=0; i<num ; i++){
        const resId = restaurantId();
        const cuisin = restaurants[resId].cuisine;
        products.push({
            name: name(),
            imageUrl: imageUrl(),
            restaurantId: resId + 1,
            price: price(),
            quantity: quantity(),
            cuisine: cuisin,
            description: description()
        });
    }
    return products;
}

const products = createProduct (30);


// const seed = () =>
//     Promise.all(restaurants.map(restaurant =>
//         Restaurant.create(restaurant)))
//         .then(() =>
//             Promise.all(products.map(product =>
//                 Product.create(product))));

// const main = () => {
//     console.log('Syncing db...');
//     db.sync({ force: true })
//         .then(() => {
//             console.log('Seeding databse...');
//             return seed();
//         })
//         .catch(err => {
//             console.log('Error while seeding');
//             console.log(err.stack);
//         })
//         .then(() => {
//             db.close();
//             return null;
//         });
// };

// main();

module.exports = {restaurants, products}
