const express = require("express")
const router = express.Router()
const rideController = require("../controllers/rideController")

router.get("/rides", rideController.getAllRides) //show all rides
router.post("/newRide", rideController.createRide) // create/add new ride

module.exports = router
