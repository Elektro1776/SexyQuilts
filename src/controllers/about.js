var express = require('express');
var router = express.Router();

router.get('/about', (req, res)=>{
  res.render('about.handlebars', { title: 'Sexy Quilts'})
});

module.exports = router;
