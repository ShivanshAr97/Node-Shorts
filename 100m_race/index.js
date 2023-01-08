const express = require("express")
const db = require("../100m_race/db/conn")
const router = require("./routers/mens")
const PORT = 8000
const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})