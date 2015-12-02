var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('categories', { title: 'Categories' });
});

module.exports = router;
