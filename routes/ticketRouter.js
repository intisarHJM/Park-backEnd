const express = require("express")
const router = express.Router()
const ticketController = require("../controllers/ticketController")

router.get("/tickets", ticketController.getAllTickets)
router.get("/rides/tickets/:rideId", ticketController.getTicketsByRideId) //all tickets of a ride
router.get("/:id", ticketController.getTicketById)
router.post("/rides/:rideId/tickets/new", ticketController.createTicket) //create new ticket array
router.post("/new", ticketController.createTicket)
router.delete("/:id", ticketController.deleteTicket)

module.exports = router
