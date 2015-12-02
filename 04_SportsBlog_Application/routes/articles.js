var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('articles', { title: 'All Articles' });
});

router.get('/show/:id', function(req, res, next) {
  res.render('article');
});

router.get('/category/:category_id', function(req, res, next) {
  res.render('articles');
});

module.exports = router;
