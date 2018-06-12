'use strict'

const db = require('../server/db')
const {User, Restaurant, Product, Order} = require('../server/db/models')
const {restaurants, products} = require('./seed_resAndPro')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */



async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123', name: 'cody', isAdmin: true}),
    User.create({email: 'murphy@email.com', password: '123', name: 'murphy'}),
  ])

  await Promise.all(restaurants.map(restaurant =>
    Restaurant.create(restaurant)));
  await Promise.all(products.map(product =>
    Product.create(product)));
  await Promise.all([
    Order.create({userId: 1, placed: true}),
    Product.findById(1),
    Product.findById(5),
    Product.findById(8),
  ])
  .then(([order, product1, product2, product3]) => {
    order.addProduct(product1, {quantity: 3}),
    order.addProduct(product2, {quantity: 1}),
    order.addProduct(product3, {quantity: 5})
  })
  await Promise.all([
    Order.create({userId: 1, placed: true}),
    Product.findById(2),
    Product.findById(3),
    Product.findById(4),
  ])
  .then(([order, product1, product2, product3]) => {
    order.addProduct(product1, {quantity: 1}),
    order.addProduct(product2, {quantity: 6}),
    order.addProduct(product3, {quantity: 2})
  })
  await Promise.all([
    Order.create({userId: 2, placed: true}),
    Product.findById(5),
    Product.findById(6),
    Product.findById(9),
  ])
  .then(([order, product1, product2, product3]) => {
    order.addProduct(product1, {quantity: 2}),
    order.addProduct(product2, {quantity: 1}),
    order.addProduct(product3, {quantity: 1})
  })
  await Promise.all([
    Order.create({userId: 2, placed: true}),
    Product.findById(10),
    Product.findById(11),
    Product.findById(13),
  ])
  .then(([order, product1, product2, product3]) => {
    order.addProduct(product1, {quantity: 2}),
    order.addProduct(product2, {quantity: 1}),
    order.addProduct(product3, {quantity: 4})
  })


  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${restaurants.length} restaurants`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
  .catch(err => {
    console.error(err)
    process.exitCode = 1
  })
  .finally(() => { // `finally` is like then + catch. It runs no matter what.
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...')
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
