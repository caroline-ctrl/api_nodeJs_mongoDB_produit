// load les modules necessaire
const express = require('express');
// load le controller
const productController = require('../controller/product_controller');

// utilisation de router
const router = express.Router();

// Les routes
router.delete('/:id', productController.deleteProduct); // route pour supprimer un produit
router.put('/:id', productController.updateProduct); // route pour modifier un produit
router.get('/:id', productController.getById); // route pour voir un produit
router.get('/', productController.getAllProducts); // route pour voir tous les produits
router.post('/', productController.createProduct); // route en post en appelant le controller et la methode

// exporte router sur toute l'appli
module.exports = router;