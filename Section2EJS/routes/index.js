var express = require('express');
var router = express.Router();

const books = [
  { title: '1984', author: 'George Orwell'},
  { title: 'A Tree Grows in Brooklyn', author: 'Betty Smith'},
  { title: 'A Hitchhiker"s Guide to the Galaxy', author: 'Douglas Adams'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', isSpecial: false, books });
});

module.exports = router;
