const express = require("express")
const db = require("./db/conn")
const student = require("./router/student")
const app = express();
const port = 8000;

app.use(express.json())
app.use(student)

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})