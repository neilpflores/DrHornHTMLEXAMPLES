var express = require('express');
var router = express.Router();

const dataToSend = {
  title: 'Express',
  isSpecial: false
}

const books = [
  {title: '1984', author: 'George Orwell' },
  {title: 'Physically Prototyping Physics for Play: Possibilities and Practicality', author: 'Dr. Horn'},
  {title: 'Cooperative Software Development', author: 'Amy Ko'}
]
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: '\n Exp</html>ress', isSpecial: true });
  //res.render('index', dataToSend);
  res.render('index',{title: 'Dynamic Page',books});
});

module.exports = router;
