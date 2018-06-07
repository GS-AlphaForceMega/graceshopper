const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll()
    .then(products => res.json(products))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(product => res.json(product))
    .catch(next);
});

//CG: probably don't want this. 
router.post('/', (req, res, next) => {
  User.create(req.body)
  //VERY clearly copied from product model.
    .then(product => res.send(product))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(product => res.json(product))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  User.destroy({ where: { id: req.params.id } })
    .then(product => res.send(product))
    .catch(next);
});