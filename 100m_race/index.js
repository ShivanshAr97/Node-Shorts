const express = require ("express")
const men = require("../100m_race/models/men")
const db = require("../100m_race/db/conn")
const PORT = 8000
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/men", async (req,res)=>{
    try {
        const result = await men.find()
        res.status(201).send(result)

    } catch (err) {
        res.status(400).send(err)
    }
})

app.get("/men/:id", async (req,res)=>{
    try {
        const _id = req.params.id
        console.log(_id)
        const result2 = await men.findById({_id})
        res.status(201).send(result2)

    } catch (err) {
        res.status(400).send(err)
    }
})

app.post("/men", async (req,res)=>{
    try {
        const addingData = new men(req.body)
        console.log(addingData)
        const result = await addingData.save();
        res.status(201).send(result)

    } catch (err) {
        res.status(400).send(err)
    }
})

app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`)
})