//Logs
_winston = require("winston")
_winston.level = "debug"

global.log = _winston

//Secreto
global.JWT_SECRETO = "cambiame"
//Puerto
global.puerto = "3000"