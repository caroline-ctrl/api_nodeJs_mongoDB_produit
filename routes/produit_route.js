// load les modules necessaire
const express = require('express');
// load le controller
const produitController = require('../controller/produit_controller');

// utilisation de router
const router = express.Router();

// Les routes
router.delete('/:id', produitController.deleteProduit); // route pour supprimer un produit
router.put('/:id', produitController.updateProduit); // route pour modifier un produit
router.get('/:id', produitController.getById); // route pour voir un produit
router.get('/', produitController.getAllProduits); // route pour voir tous les produits
router.post('/', produitController.createProduit); // route en post en appelant le controller et la methode

// exporte router sur toute l'appli
module.exports = router;