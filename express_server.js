const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req,res) => {
    console.log("Hello from express");
    res.end("hello");
});

app.listen(port,function(){
    console.log("Listening on port 7000");
});