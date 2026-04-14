const express = require("express")
const router = express.Router()
const rideController = require("../controllers/rideController")
const { validateRide } = require("../middleware")

router.get("/rides", rideController.getAllRides) //show all rides
router.get("/rides/:id", rideController.getRideById) // get Single Ride By ID
router.post("/newRide", validateRide, rideController.createRide) // create/add new ride & validate the field by middleware
router.delete("/rides/:id", rideController.deleteRideById) // delete Single Ride By Id

module.exports = router
