var express = require('express');
var bodyParser = require('body-parser');
var exbhbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000






app.listen(port, ()=>{
  console.log('served started on port', port);
})
