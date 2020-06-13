// load tous les modules necessaire pour l'api
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const produitRoute = require('./routes/produit_route');

// pour les routes
const app = express();

// établit la relation avec postman
mongoose.connect('mongodb+srv://carod:caroD34270*@cluster0-fbriu.gcp.mongodb.net/produit?retryWrites=true&w=majority', { // se connecte à Mongoose grace a l'uri (nom dbb et mp demandé)
    useNewUrlParser: true, // permet de contouner les pilotes dépréciés
    useUnifiedTopology: true // supprime le message disant que c'est depressier 
}).then(() => { // si pas d'erreur, imprime dans la console le message
    console.log('connexion mongoose établie');
}).catch(err => { // si erreur, imprime dans la console l'erreur
    console.log(err);
});


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api/produit', produitRoute) // toutes les routes vont etre précédées de /api/recettes


// exporte le fichier dans toute l'appli
module.exports = app;