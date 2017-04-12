require("./startup.js")
require("./database/conectar.js")

// * Middleware * //
var compresion 	= require('compression')
var morgan     	= require('morgan')
var express 	= require('express')
var helmet 		= require('helmet')
var bodyParser 	= require('body-parser')
var app 		= express()

app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(compresion())
// * Middleware * //

// * Rutas * //
var apiUsuarios = require("./rutas/usuario.js")
var apiAuth = require("./rutas/autenticar.js")
var apiProteger = require("./rutas/proteger.js")
// * Rutas * //

//Rutas sin autenticacion
//Autenticar
app.use('/api', apiAuth)

//Pedir autenticacion
app.use(apiProteger)

//Todas las siguientes rutas requieren autenticacion
app.use('/api', apiUsuarios)


app.set("SECRETO", process.env.JWT_SECRET);

app.listen(process.env.PUERTO || 3000, function () {
  global.log.info('Aplicacion corriendo en puerto '+(process.env.PUERTO || 3000))
  global.log.info('Robot = '+process.env.ROBOT)
  global.log.info('Jwt secreto = '+process.env.JWT_SECRET)
})
