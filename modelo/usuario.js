var _mongoose = require("mongoose");
var sha256 = require("sha256");

var validarCedula = function(cedula) {
    return cedula.startsWith("V") && cedula.length < 12
}

var validarNombre = function(nombre) {
    //Sin numeros
    return !(/\d/.test(nombre))
}

var validarUsuario = function(usuario) {
    return /^[a-zA-Z0-9]+$/.test(usuario)
}

var validarContraseña = function(contraseña) {
    return contraseña.length > 6
}

var encriptarContraseña = function(contraseña) {
  return sha256.x2(contraseña)
}

var _usuarioSchema = new _mongoose.Schema({
    cedula: {
        type: String,
        required: [true, "La cedula es obligatoria"],
        validate: {
            validator: validarCedula,
            message: '{VALUE} no es una cedula valida'
        }
    },

    nombres: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        validate: {
            validator: validarNombre,
            message: '{VALUE} no es un nombre valido'
        }
    },

    apellidos: {
        type: String,
        required: [true, "Los apellidos son obligatorio"],
        validate: {
            validator: validarNombre,
            message: '{VALUE} no es un apellido valido'
        }
    },

    login_usuario: {
        type: String,
        index: true,
        unique: true,
        dropDups: true,
        required: [true, "El usuario es obligatorio"],
        validate: {
            validator: validarUsuario,
            message: '{VALUE} no es un nombre de usuario valido'
        }
    },

    login_phash: {
      type: String,
      required: [true, "Se necesita contraseña"],
      validate: {
        validator: validarContraseña,
        message: 'Contraseña invalida'
      },
      set: encriptarContraseña
    },

    fecha_de_registro: {
        type: Date,
        default: Date.now
    },

    es_administrador: {
        type: Boolean,
        default: false
    }
});

module.exports = global.mongo.model('Usuario', _usuarioSchema);