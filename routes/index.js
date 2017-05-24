var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contactanos', function(req, res, next) {
  res.render('contactanos', { img: 'images/imagen.jpg' });
});

module.exports = router;
