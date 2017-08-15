var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
  res.render('home.handlebars', { title: 'Sexy Quilts'})
});

module.exports = router;
