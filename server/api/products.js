const router = require('express').Router();
const Product = require('../db/models/product');
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = router;

router.get('/', (req, res, next) => {
    Product.findAll({
        include: ['restaurant', 'reviews']
    })
        .then(products => res.json(products))
        .catch(next);
});
//this is for querying by name in search bar stick right into findAll above
// router.get('/findmyorderplease', (req, res, next) => {
//     Product.findAll({
//         where: {
//             name: {
//                 [Op.iLike]: '%but%'
//             }
//         }
//     })
//     .then(products => res.json(products))
//     .catch(next)
// })

router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id, {
        include: ['restaurant', 'reviews']
    })
        .then(product => res.json(product))
        .catch(next);
});

router.post('/', (req, res, next) => {
    if (req.user.isAdmin === true) {
        Product.create(req.body)
            .then(product => res.send(product))
            .catch(next);
    } else throw new Error('You must be logged in as an admin to add products.');
});

router.put('/:id', (req, res, next) => {
    if (req.user.isAdmin === true) {
        let id = Number(req.params.id);
        Product.findOne({
            where: id
        })
        .then(foundProduct => {
            return foundProduct.update(req.body)
        })
        .then(newProduct => {
            res.send(newProduct);
        })
        .catch(next);
        // Product.update(req.body, { where: { id: req.params.id } })
        //     .then(product => {
        //         console.log(product)
        //         res.json(product)
        //     })
        //     .catch(next);
    } else throw new Error('You must be logged in as an admin to edit products.');
});

router.delete('/:id', (req, res, next) => {
    if (req.user.isAdmin === true) {
        Product.destroy({ where: { id: req.params.id } })
            .then(product => res.send(product))
            .catch(next);
    } else throw new Error('You must be logged in as an admin to delete products.');
});