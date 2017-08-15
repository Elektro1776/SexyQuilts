var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000

app.set('views', __dirname + '/src/views');
app.engine('handlebars', exphbs({
  defaultLayout: __dirname + "/src/views/layouts/main.handlebars"
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res)=>{
  res.render('home.handlebars')
});






app.listen(port, ()=>{
  console.log('served started on port', port);
})
