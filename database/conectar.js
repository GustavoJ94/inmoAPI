var _mongoose = require("mongoose");
_mongoose.connect('mongodb://localhost/test', function(err) {
    if (err) {
    	global.log.error("Error connectando a MongoDB:"+err);
    	throw err;
    } else {
    	global.log.info("Conectado a MongoDB");
    }
});


global.mongo = _mongoose;