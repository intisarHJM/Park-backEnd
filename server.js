require("dotenv").config({ quiet: true })

const express = require("express")
const morgan = require("morgan")

const PORT = process.env.PORT || 3001

const db = require("./db")

//Routers
const rideRouter = require("./routes/rideRouter")
// const ticketRouter = require("./routes/ticketRouter")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", rideRouter)
// app.use("/tickets",ticketRouter)

app.get("/", (req, res) => {
  res.send("welcome to our park !")
})

app.listen(PORT, () => {
  console.log(`Server is up on port:`, PORT)
})
