var ruta = require("express").Router()
var jwt = require('jsonwebtoken');

ruta.use(function(req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, global.JWT_SECRETO,
            function(err, decoded) {
                if (err) {
                    res.status(401)
                    return res.json({
                        success: false,
                        message: 'Token invalido.'
                    });
                } else {
                    req.usuario = decoded;
                    next();
                }
            });

    } else {

        return res.status(400).send({
            success: false,
            message: 'Sin token.'
        });

    }
});

module.exports = ruta