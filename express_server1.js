const express = require("express");
const app = express();
const port = 5000;
const api = require("./api1.js");

app.use('/static', express.static(__dirname));

app.use('/api',api);

app.get("/", (req, res) => {
    const name = req.query.name;
    console.log(`hello ${name} from root`);
    res.end("root page");
});

/*app.get("/:name", (req,res) => {
    const nameVar = req.params.name;
    console.log(`Hello ${nameVar}`);
    res.end("param page");
});*/

app.get("/other", (req,res) => {
    console.log("hi from other");
    res.end("other page");
});



app.listen(port, () => console.log("listening on 5000"));