var express = require('express');
var router = express.Router();
var db_connection = require('../database/connection');

router.get('/', function(req, res, next) {
    let sql = `SELECT * FROM books;`

    db_connection.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('index',{books: result, title: 'books page'})
    })
});

router.get('/enterbook', function(req,res) {
    res.render('addbook',{title: 'Add book page'})
})

router.post('/addbook', function(req,res) {
    console.log(req.body);

    //let sql = `INSERT INTO books (title, author) VALUES (?,?)`;
    //db_connection.query(sql,[req.body.title,req.body.author], (err,result) => {

    //})
})

module.exports = router;