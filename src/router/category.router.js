const router = require('express').Router() ;

const categoryController = require('../controllers/category.controllers');

router.get('/', categoryController.getCategory)

module.exports = router
