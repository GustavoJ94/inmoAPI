var usuario     = require("../modelo/usuario.js")
var sha256      = require("sha256")
var jwt         = require('jsonwebtoken');

var nuevo = function(r, _usuario) {
    usuario.create(_usuario, function(error, instancia) {
        if (error) {
            global.log.error("Error al crear usuario.", error)
            r.res.json({
                error: error
            })
            r.res.status(400)
        } else {
            global.log.info("Usuario creado: ", instancia)
            r.res.status(201)
            r.res.json(instancia)
        }
    })
}

var todos = function(r) {
    usuario.find({}).exec(function(err, docs) {
        r.res.json(docs)
    })
}

var autenticar = function(r) {
    var pwhash = sha256.x2(r.req.body.login_phash)

    usuario.findOne({
            login_usuario: r.req.body.login_usuario,
            login_phash: pwhash
        },
        function(err, usuario) {
            if (err) {
                r.res.status(500)
                global.log.error("Error en callback de usuario", err)
            }

            if (!usuario) {
                r.res.status(403)
                r.res.json({
                    autenticado: false,
                    mensaje: "Usuario/Contraseña incorrectos"
                })
            } else {
                var token = jwt.sign( {usuario: usuario._id}, process.env.JWT_SECRET, {
                    expiresIn: "1d"
                });

                r.res.json({
                    autenticado: true,
                    token: token
                })
            }
        });

}


module.exports.nuevo = nuevo
module.exports.todos = todos
module.exports.autenticar = autenticar