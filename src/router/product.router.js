const router = require('express').Router() ;

const productController = require('../controllers/products.controllers');

router.get('/', productController.getAllProducts)
router.get('/search', productController.searchProducts) //PERF: en esta ruta podras buscar productos por su nombre

module.exports = router
