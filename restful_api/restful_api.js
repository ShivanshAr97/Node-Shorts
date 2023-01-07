const express = require("express")
const db = require("./db/conn")
// const studentRouter = require("./router/student")
const app = express();
const port = 8000;

// app.use(studentRouter)

app.use(express.json())


app.get("/student", async (req, res) => {
    try {
        const result = await Student.find()
        res.send(result);
    } catch (err) {
        res.send(err)
    }
})

app.get("/student/:name", async (req,res) =>{
    try {
        console.log(req.params.name);
        const name = req.params.name
        const result2 = await Student.find({name})
        if (!result2) {
            res.status(404).send("No data found")
        }
        else{
        res.send(result2);
    }
    } catch (err) {
        res.status(500).send(err)
    }
})

app.post("/student/", async (req, res) => {
    console.log(req.body)
    const result = new Student(req.body)
    try {
        const result2 = await result.save()
        res.status(201).send(result2)
    } catch (err) {
        res.status(400).send(err)
    }
})

app.patch("/student/:id", async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        const result3 = await Student.findByIdAndUpdate(id, req.body, {
            new:true
        })
        console.log(result3);
        res.send(result3)
    } catch (err) {
        res.send(err)
    }
})

app.delete("/student/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const result4 = await Student.findByIdAndDelete(id)
        res.send(result4)
    } catch (err) {
        res.send(err)
    }
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})