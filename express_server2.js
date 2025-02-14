const express = require("express");
const app = express();
const port = 5000;
const api = require("./api2.js")

app.use(express.static(__dirname));

app.use("/api",api);

app.get("/", (req, res) => {
    console.log("request to root");
    const name = req.query.name;
    res.end(`Root Page for ${name}`);
});

app.get("/other", (req,res) => {
    console.log("This is the other one");
    res.end("Other page");
});

app.get("/other/:id", (req,res) => {
    const idVar = req.params.id;
    res.end(`Page for ${idVar}`);
})

app.listen(port, () => console.log("listening on 5000"));