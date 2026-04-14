const express = require("express")
const router = express.Router()
const rideController = require("../controllers/rideController")
const { validateRide } = require("../middleware")

router.get("/rides", rideController.getAllRides) //show all rides
router.post("/newRide", rideController.createRide) // create/add new ride

//middleware route
router.post("/", validateRide, recipeController.createRecipe)

module.exports = router
