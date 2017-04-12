# inmoAPI
API de inmobiliaria

```javascript
$ npm install
$ npm start
```

##

##### Rutas

```
GET localhost:3000/api/usuarios
```

 Lista todos los usuarios en formato JSON
 
 
 .
 
```
POST localhost:3000/api/usuario
```

Añade un usuario, valida los datos, los espera en formato JSON

```javascript
{
"nombres": "",
"apellidos": "",
"cedula": "",
"login_usuario": "",
"es_administrador": false, //Opcional
"fecha_de_registro": ""    //Opcional
}
```