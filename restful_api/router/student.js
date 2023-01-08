const express = require("express")
const router = new express.Router();
const student = require("../modals/students")

router.get("/", async (req, res) => {
    res.send("Hello")
})

router.get("/student", async (req, res) => {
    try {
        const result = await student.find()
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get("/student/:name", async (req, res) => {
    try {
        console.log(req.params.name);
        const name = req.params.name
        const result2 = await student.find({ name })
        if (!result2) {
            res.status(404).send("No data found")
        }
        else {
            res.send(result2);
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post("/student", async (req, res) => {
    try {
        const addingData = new student(req.body)
        console.log(addingData)
        const result = await addingData.save();
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const result = await student.findByIdAndUpdate({ _id }, req.body, {
            new: true
        })
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.delete("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const result = await student.findByIdAndDelete({ _id })
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router