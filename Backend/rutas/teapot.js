var ruta = require("express").Router()

ruta.get('/te', function(req, res) {
    res.json(
    	{
    		cafe: {
    			temperatura : "caliente",
    			color : "negro",
    			sabor : "amargo"
    		}
    	}
    );

    res.status(418)
})

module.exports = ruta