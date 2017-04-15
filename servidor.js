require("./startup.js")
require("./database/conectar.js")

// * Middleware * //
var compresion 	= require('compression')
var morgan     	= require('morgan')
var express 	= require('express')
var helmet 		= require('helmet')
var bodyParser 	= require('body-parser')
var cors 		= require('cors')
var app 		= express()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json({type: "*/*"}))
app.use(morgan('dev'))
app.use(compresion())
// * Middleware * //

// * Rutas * //
var apiUsuarios = require("./rutas/usuario.js")
var apiAuth = require("./rutas/autenticar.js")
var apiProteger = require("./rutas/proteger.js")
var apiTeapot = require("./rutas/teapot.js")
// * Rutas * //


//Rutas sin autenticacion
	//Hola :D
app.get('/', function(req, res) {
	res.send("For a moment, nothing happened. Then, after a second or so, nothing continued to happen.")
})

	//Autenticar
app.use('/api', apiAuth)
app.use('/api', apiTeapot)

//Pedir autenticacion
app.use(apiProteger)

//Rutas que requieren autenticacion
	//Rutas que requieren permisos de usuario normal

	//Rutas que requieren permisos de administrador
app.use('/api', apiUsuarios)


//Fin
app.use(function (req, res, next) {
  res.status(404)
  res.json({error:"No hay nada por aqui"})
})


app.listen(global.puerto || 3000, function () {
  global.log.info('Aplicacion corriendo en puerto '+(global.puerto || 3000))
  global.log.info('Jwt secreto = '+global.JWT_SECRETO)
})
