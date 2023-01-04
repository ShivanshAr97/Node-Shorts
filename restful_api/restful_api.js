const express = require("express")
const db = require("../restful_api/db/conn")
const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.post("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})