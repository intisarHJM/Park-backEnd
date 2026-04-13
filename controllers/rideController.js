const Ride = require("../models/Ride")

const createRide = async (req, res) => {
  try {
    const ride = await Ride.create(req.body)
    return res.json({
      message: `${ride.name} successfully created`,
      data: ride,
    })
  } catch (error) {
    console.error("⚠️ Error creating ride:", error.message)
    return res.status(400).json({
      error: "An error occurred creating the new ride.",
      details: error.message,
    })
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    res.send(`rides: ${rides}`)
  } catch (error) {
    console.error("⚠️ Error showing all rides:", error.message)
    return res.status(400).json({
      error: "An error occurred getting all rides.",
      details: error.message,
    })
  }
}

//get single ride by id(Rehab)

//delete single ride by id(Rehab)

module.exports = {
  getAllRides,
  createRide,
}
