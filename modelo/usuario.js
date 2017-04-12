var _mongoose = require("mongoose");

var validarCedula = function(cedula){
	return cedula.startsWith("V") && cedula.length < 12
}

var validarNombre = function(nombre) {
	//Sin numeros
	return !(/\d/.test(nombre))
}

var validarUsuario= function(usuario) {
	return /^[a-zA-Z0-9]+$/.test(usuario)
}

var _usuarioSchema = new _mongoose.Schema({
	cedula: 			
	{
		type: String,
		required: [true, "La cedula es obligatoria"],
		validate: {
          validator: validarCedula,
          message: '{VALUE} no es una cedula valida'
        }
	},

  	nombres:   			
  	{
		type: String,
		required: [true, "El nombre es obligatorio"],
		validate: {
          validator: validarNombre,
          message: '{VALUE} no es un nombre valido'
        }
	},

  	apellidos:
  	{
		type: String,
		required: [true, "Los apellidos son obligatorio"],
		validate: {
          validator: validarNombre,
          message: '{VALUE} no es un apellido valido'
        }
	},

  	login_usuario:
  	{
		type: String,
		required: [true, "El usuario es obligatorio"],
		validate: {
          validator: validarUsuario,
          message: '{VALUE} no es un nombre de usuario valido'
        }
	},

  	fecha_de_registro: 
  	{ 
  		type: Date, 
  		default: Date.now 
  	},

  	es_administrador: 
  	{
  		type: Boolean,
  		default: false
  	}
});

module.exports = global.mongo.model('Usuario', _usuarioSchema );