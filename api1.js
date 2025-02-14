const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("API page");
})

router.get("/custom",(req,res)=> {
    res.send("Custom API page");
})

module.exports = router;