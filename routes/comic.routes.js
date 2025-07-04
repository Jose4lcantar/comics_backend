const express = require('express')
const comicRuta = express.Router()

// Modelo
let Comic = require('../models/comic')

// Agregar un nuevo empleado
comicRuta.route('/agregar').post((req, res) => {
    Comic.create(req.body)
        .then((data) => {
            console.log('Se agregó un cómic correctamente')
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send(error)
        })
})

// Obtener todos los empleados
comicRuta.route('/comics').get((req, res) => {
    Comic.find()
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send(error)
        })
})

// Obtener un solo empleado por ID
comicRuta.route('/comic/:id').get((req, res) => {
    Comic.findById(req.params.id)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send(error)
        })
})

// Actualizar un empleado
comicRuta.route('/actualizar/:id').put((req, res) => {
    Comic.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true })
        .then((data) => {
            console.log('Se actualizó el cómic')
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send(error)
        })
})

// Eliminar un empleado
comicRuta.route('/eliminar/:id').delete((req, res) => {
    Comic.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log('Se eliminó el cómic')
            res.send({ message: 'Cómic eliminado', data })
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send(error)
        })
})

// Exportar
module.exports = comicRuta
