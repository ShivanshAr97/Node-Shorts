const express = require("express")
require("./src/db/conn")
const path = require("path")
const app = express()
const PORT = 8000;

const static_path = path.join(__dirname, '/public');
app.use(express.static(static_path))
app.get("/", async(req,res)=>{
    res.send("Hello")
})

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})