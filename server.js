const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const createError = require('http-errors')


// Conexión con la base de datos
mongoose
    //.connect('mongodb://127.0.0.1:27017/comicsal')
    .connect('mongodb+srv://joseamti22:Epqpwppr@cluster0.ozkomgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then((x) => {
        console.log(`Conectado a la BD: "${x.connections[0].name}"`)
    })
    .catch((error) => {
        console.log('Error en la conexión: ', error.reason)
    })

const comicRoutes = require('./routes/comic.routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
  origin: 'https://comics-frontend-sooty.vercel.app'
}));


app.use('/api', comicRoutes)    

// Habilitar el puerto
const port = process.env.PORT || 4000
app.listen(port, () => {
        console.log('Servidor escuchando en el puerto : '+port)

})

//manejando el error 404
app.use((req, res, next) => {
    next(createError(404))
})

//manejador de errores en general
app.use(function(err,req,res,next){
    console.log(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})




 