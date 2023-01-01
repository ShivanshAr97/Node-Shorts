const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello home page')
})
app.get('/about', function (req, res) {
    res.send('Hello about page')
})
app.get('/contact', function (req, res) {
    res.send('Hello contact page')
})
app.get('/testimonial', function (req, res) {
    res.send('Hello testimonial page')
})


app.listen(3000)