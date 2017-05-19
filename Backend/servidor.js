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

/* Las rutas llegan, y van intentando entrar en la primera funcion que coincida
	
	|
 Peticion
	|
    v
*/

//Rutas sin autenticacion
app.get('/', function(req, res) {
	res.send("Aqui no hay nada.")
})

	//Autenticar
app.use('/api', apiAuth)
app.use('/api', apiTeapot)


/* Las rutas intentan pasar por esta linea, pero solo pasan si pertenecen a un usuario autenticado
	
	|
 Peticion
	|
	v

*/

//Pedir autenticacion
app.use(apiProteger)

//Rutas que requieren autenticacion
	//Rutas que requieren permisos de usuario normal

	//Rutas que requieren permisos de administrador
app.use('/api', apiUsuarios)



//Fin
app.use(function (req, res, next) {        /* Si la peticion llega aca, ninguna ruta hizo match con alguna funcion  */
  res.status(404)
  res.json({error:"No hay nada por aqui"})
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(global.puerto || 3000, function () {
  global.log.info('Aplicacion corriendo en puerto '+(global.puerto || 3000))
  global.log.info('Jwt secreto = '+global.JWT_SECRETO)
})
