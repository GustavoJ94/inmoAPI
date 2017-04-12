var ruta = require("express").Router();
var usuario = require("../acciones/usuario.js")

ruta.post("/autenticar", function(req, res){
	usuario.autenticar({req, res})
});

module.exports = ruta 