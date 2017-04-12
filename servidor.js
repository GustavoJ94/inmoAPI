require("./startup.js")
require("./database/conectar.js")

// * Middleware * //
var compresion = require('compression')
var morgan = require('morgan')
var express = require('express')
var helmet = require('helmet')
var bodyParser = require('body-parser')
var app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(compresion())
// * Middleware * //

// * Rutas * //
var apiUsuarios = require("./rutas/usuario.js")
// * Rutas * //

app.get('/', function (req, res) {
  res.send("Jej");
})

app.use('/api', apiUsuarios)

app.listen(3000, function () {
  global.log.info('Aplicacion corriendo en puerto 3000')
})
