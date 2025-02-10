const express = require("express");
const app = express();
const port = 5000;

app.use('/static', express.static(__dirname));

app.get("/", (req, res) => {
    console.log("hello from root");
    res.end("root page");
});

app.get("/:name", (req,res) => {
    const nameVar = req.params.name;
    console.log(`Hello ${nameVar}`);
    res.end("param page");
});

app.get("/other", (req,res) => {
    console.log("hi from other");
    res.end("other page");
});



app.listen(port, () => console.log("listening on 5000"));