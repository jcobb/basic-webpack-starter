var express = require('express')
var app = express()
var path = require('path');

app.use(express.static(__dirname + '/../dist'));

app.listen(3000, function () {
  console.log('Kick out the jams!')
})
