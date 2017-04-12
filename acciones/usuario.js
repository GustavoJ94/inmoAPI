var usuario = require("../modelo/usuario.js")


var nuevo = function(r, _usuario) {
    usuario.create(_usuario, function(error, instancia) {
        if (error) {
            global.log.error("Error al crear usuario.", error)
            r.res.json({error: error})
            r.res.status(400)
        } else {
            global.log.info("Usuario creado: ", instancia)
            r.res.json(instancia)
        }
    })
}

var todos = function(r) {
    usuario.find({}).exec(function(err, docs) {
    	r.res.json(docs)
    })
}

module.exports.nuevo = nuevo
module.exports.todos = todos