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


const getRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id).populate("tickets")
    if (!ride) {
      return res.status(404).json({ success: false, message: "Ride not found" })
    }
    res.status(200).json({ success: true, data: ride })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred getting ride by id.",
      error: error.message,
    })
  }
}


//delete single ride by id(Rehab)




const deleteRideById = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndDelete(req.params.id)

    if (!ride) {
      return res.status(404).json({ success: false, message: "Ride not found" })
    }

    res.status(200).json({ success: true, message: `${ride.name} deleted successfully` })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred deleting the ride",
      error: error.message,
    })
  }
}

module.exports = {
  getAllRides,
  createRide,
  getRideById,
  deleteRideById
}
