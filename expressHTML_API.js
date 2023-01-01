const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello home page</h1>')
})
app.get('/about', function (req, res) {
    res.send([{
        id: 1,
        name: "Abc",
        class: 10
    },
    {
        id: 2,
        name: "Def",
        class: 11
    },
    {
        id: 3,
        name: "Ghi",
        class: 12
    }
])
})
app.get('/contact', function (req, res) {
    res.send('Hello contact page')
})
app.get('/testimonial', function (req, res) {
    res.send('Hello testimonial page')
})


app.listen(3000)