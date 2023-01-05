const express = require("express")
const db = require("./db/conn")
const studentRouter = require("./router/student")
const app = express();
const port = 8000;

app.use(studentRouter)

app.use(express.json())

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})