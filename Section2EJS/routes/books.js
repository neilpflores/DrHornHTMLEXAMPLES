const express = require("express");
const router = express.Router();
const db = require("../database/connection");

router.get("/",(req,res) => {
    console.log("book route");
    let sql = `SELECT * FROM books;`;
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('index',{title: 'Book View Page', books: result});
    })
    
});

router.get("/enterbook",(req,res) => {
    res.render('enterbook',{title: 'Enter Book Page'});
});

router.post("/addbook",(req,res) => {
    console.log(req.body);

    let sql = `INSERT INTO books (title,author) VALUES (?,?)`;

    db.query(sql,[req.body.title,req.body.author], (err,result) => {
        if(err) throw err;
        res.redirect('./');
    });
});

module.exports = router;