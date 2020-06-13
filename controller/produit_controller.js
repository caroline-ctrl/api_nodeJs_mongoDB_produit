// load le model Produit_model
const Produit = require('../model/Produit_model');



/************************************************/
/********************CRUD************************/
/************************************************/

// CREATE PRODUIT
exports.createProduit = (req, res) => { // export la methode createProduit
    const produitInstance = new Produit({ // instancie un objet Produit afin de créer un nouveau produit
        ...req.body // recupere le contenu du body de la requete
    });
    produitInstance.save().then(() => { // sauvegarde l'instance
        res.status(201).json({ // si le produit est créé, affiche dans la console le message
            message: "Produit créé"
        })
    }).catch(err => { // si erreur, affiche dans la console le message d'erreur
        res.status(400).json({
            message: "Erreur, le produit n'est pas enregisté"
        })
    })
}


// GET ALL PRODUIT
exports.getAllProduits = (req, res) => { // export la methode getAllProduits
    Produit.find().then(produits => { // trouve tous les produits
        res.status(200).json(produits) // si tous les produits sont trouvés, affiche dans la console le message
    }).catch(err => { // si erreur, affiche dans la console le message d'erreur
        res.status(400).json(err)
    })
}


// GET BY ID
exports.getById = (req, res) => { // export la methode getById
    Produit.findById(req.params.id).then(recette => { // trouve le produit en fonction de son id
        res.status(200).json(recette); // si le produit est trouvé, affiche dans la console le message
    }).catch(err => { // si erreur, affiche dans la console le message d'erreur
        res.status(400).json(err);
    })
}


// UPDATE
exports.updateProduit = (req, res) => { // export la methode updateProduit
    Produit.findByIdAndUpdate(req.params.id, { // en fonction de l'id
        ...req.body // on recupère le contenu modifié dans postman
    }).then(() => { // si le produit a pu etre modifié, affiche dans la console le message
        res.status(200).json({
            message: "Produit mis a jour"
        });
    }).catch(err => { // si erreur, affiche dans la console le message d'erreur
        res.status(400).json(err);
    })
}


// DELETE
exports.deleteProduit = (req, res) => { // export la methode deleteProduit
    Produit.findByIdAndDelete(req.params.id).then(() => { // en fonction de l'id on supprime
        res.status(200).json({ // si le produit a pu etre supprimé, affiche dans la console le message
            message: "Produit supprimé"
        })
    }).catch(err => { // si erreur, affiche dans la console le message d'erreur
        res.status(400).json(err);
    })
}