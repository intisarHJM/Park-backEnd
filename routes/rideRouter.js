const express = require("express")
const router = express.Router()
const rideController = require("../controllers/rideController")
const { validateRide } = require("../middleware")
const { validateRide } = require("../middleware")

router.get("/rides", rideController.getAllRides) //show all rides
router.post("/newRide", rideController.createRide) // create/add new ride
router.get("/rides/:id", rideController.getRideById) // get Single Ride By ID
router.delete("/rides/:id", rideController.deleteRideById) // delete Single Ride By Id

//middleware route
router.post("/", validateRide, recipeController.createRecipe)

module.exports = router
