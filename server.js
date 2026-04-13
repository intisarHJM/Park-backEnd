require("dotenv").config({ quiet: true })

const express = require("express")
const morgan = require("morgan")

const PORT = process.env.PORT || 3001

const db = require("./db")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("workking")
})

app.listen(PORT, () => {
  console.log(`Mongoose is up on port,`, PORT)
})
