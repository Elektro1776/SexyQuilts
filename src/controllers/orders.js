var express = require('express');
var router = express.Router();

router.get('/orders', (req, res)=>{
  res.render('orders.handlebars', { title: 'Sexy Quilts'})
});

module.exports = router;
