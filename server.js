var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var homeRouter = require('./src/controllers/home.js');
var aboutRouter = require('./src/controllers/about.js');
var ordersRouter = require('./src/controllers/orders.js');
var contactRouter = require('./src/controllers/contact.js');
var app = express();
var port = process.env.PORT || 3000;

app.set('views', __dirname + '/src/views');
app.engine('handlebars', exphbs({
  defaultLayout: __dirname + "/src/views/layouts/main.handlebars",
  partialsDir: __dirname + '/src/views/partials/'
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRouter);
app.use(aboutRouter);
app.use(ordersRouter);
app.use(contactRouter);






app.listen(port, ()=>{
  console.log('served started on port', port);
});
