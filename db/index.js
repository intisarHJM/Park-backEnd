const mongoose = require("mongoose")
require("dotenv").config()

const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

mongoose.set("strictQuery", false)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("DB connection error", error.message)
  }
}

connect()

const db = mongoose.connection
module.exports = db
