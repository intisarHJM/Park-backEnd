const express = require("express")
const router = express.Router()
const ticketController = require("../controllers/ticketController")

router.get("/", ticketController.getAllTickets)
router.get("/:id", ticketController.getTicketById)
router.post("/new", ticketController.createTicket)

module.exports = router
