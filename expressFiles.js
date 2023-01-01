const express = require('express')
const path = require('path')
const app = express()

const sPath = path.join(__dirname,"Files")
app.use(express.static(sPath))
console.log(sPath)

app.get('/', function (req, res) {
    res.send('Hello home page')
})
app.get('/about', function (req, res) {
    res.send('Hello about page')
})


app.listen(3000)