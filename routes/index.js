var express = require('express');
var router = express.Router();

/* GET home page. */
var test = 'Memories';
router.get('/', function(req, res, next) {
  res.render('index', { title: test });
  // res.render('home', { title: 'Memories' });
});

module.exports = router;
