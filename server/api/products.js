const router = require('express').Router();
const Product = require('../db/models/product');
module.exports = router;

//CG: Add a linter or use prettier or something. Standardize your rules on semi-colons or not.

router.get('/', (req, res, next) => {
    // const whereObj = {};
    // if(req.query.category){
    //     whereObj.category = req.query.category; 
    // }
    Product.findAll({
        include: [{all: true}],
        // where: whereObj //CG: Recursing through all nested models can be dangerous.
    })
        .then(products => res.json(products))
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id) //CG: I'd prfer you cast Number(req.params.id) 
        .then(product => res.json(product))
        .catch(next);
});

router.post('/', (req, res, next) => {
    //CG: We eventually secure this route. 
    Product.create(req.body)
        .then(product => res.send(product))
        .catch(next);
});

router.put('/:id', (req, res, next) => {
    //CG: We eventually secure this route. 
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
});

router.delete('/:id', (req, res, next) => {
    Product.destroy({ where: { id: req.params.id } })
        .then(product => res.send(product))
        .catch(next);
});