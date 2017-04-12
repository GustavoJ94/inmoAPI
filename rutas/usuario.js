var ruta = require("express").Router()
var usuario = require("../acciones/usuario.js")

//Todos los usuarios
ruta.get('/usuarios', function(req, res) {
    usuario.todos({req, res})
})

//Usuario por cedula
ruta.get('/usuario/cedula/:cedula', function(req, res) {
    res.send('Cow, Horse, Sheep')
})

//Nuevo usuario
ruta.post('/usuario', function(req, res) {
    usuario.nuevo(req, req.body)
})


module.exports = ruta