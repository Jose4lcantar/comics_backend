const mongoose = require('mongoose')
const Schema = mongoose.Schema 

let Comic = new Schema({
    titulo: {
        type: String
    },
    genero: {
        type: String
    },
    editorial: {
        type: String
    },
    anio: {
        type: Number
    },
    autor: {
        type: String
    },
    imagenUrl: { type: String }
}, {
    collection: 'comics'
})

module.exports = mongoose.model('Comic', Comic)
