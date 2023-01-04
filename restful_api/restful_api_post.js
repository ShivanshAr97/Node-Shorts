const express = require("express")
const db = require("./db/conn")
const Student = require("./modals/students")
const app = express();
const port = 8000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/", async (req, res) => {
    console.log(req.body)
    const result = new Student(req.body)
    try {
        const result2 = await result.save()
        res.status(201).send(result2)
    } catch (err) {
        res.status(400).send(err)
    }
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})