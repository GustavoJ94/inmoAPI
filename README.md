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



.
```
POST localhost:3000/api/autenticar
```
Autentica un usuario, regresa un token que se debe pasar en cada peticion. Espera los datos de autenticacion de la siguiente forma
```javascript
{
"login_usuario": "usuario",
"login_phash": "contraseña"
}
```

.
