var compresion = require('compression')
var morgan = require('morgan')
var express = require('express')
var helmet = require('helmet')
var app = express()

app.use(helmet())
app.use(morgan('combined'))
app.use(compresion())

app.get('/', function (req, res) {
  res.send('Hola el mio')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
