const express = require("express")
const router = new express.Router();
const men = require("../models/men")

router.get("/", async (req, res) => {
    res.send("Hello")
})

router.get("/men", async (req, res) => {
    try {
        const result = await men.find().sort({ "ranking": 1 })
        res.status(201).send(result)

    } catch (err) {
        res.status(400).send(err)
    }
})

router.get("/men/:id", async (req, res) => {
    try {
        const _id = req.params.id
        console.log(_id)
        const result2 = await men.findById({ _id })
        res.status(201).send(result2)

    } catch (err) {
        res.status(400).send(err)
    }
})

// app.get("/men/:name", async (req,res)=>{
//     try {
//         const name = req.params.name
//         console.log(name)
//         const result2 = await men.find({"name":name})
//         res.status(201).send(result2)

//     } catch (err) {
//         res.status(400).send(err)
//     }
// })

router.post("/men", async (req, res) => {
    try {
        const addingData = new men(req.body)
        console.log(addingData)
        const result = await addingData.save();
        res.status(201).send(result)

    } catch (err) {
        res.status(400).send(err)
    }
})

router.patch("/men/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await men.findByIdAndUpdate({ _id }, req.body, {
            new: true
        })
        res.status(201).send(result)

    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete("/men/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await men.findByIdAndDelete({ _id })
        res.status(201).send(result)

    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router