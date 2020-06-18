// load les modules necessaire
const mongoose = require('mongoose');

// construit les intitulés et type dans la bdd du produit donc le schéma de mes données
const ProductSchema = mongoose.Schema({
    title: { // le titre sera de type string et sera obligatoire
        type: String,
        required: true
    },
    content: { // le contenu sera de type string et sera obligatoire
        type: String,
        required: true
    },
    created_at: { // la date de création sera de type date et sera obligatoire
        type: String,
        required: true,
        // timestamps: true
    },
    updated_at: { // la date de modification sera de type date et sera obligatoire
        type: String,
        required: true,
        // timestamps: true
    }
});


// exporter le schema
module.exports = mongoose.model('Product_model', ProductSchema);