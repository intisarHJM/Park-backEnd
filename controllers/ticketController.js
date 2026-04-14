const Ticket = require("../models/Ticket")
const Ride = require("../models/Ride")

const createTicket = async (req, res) => {
  try {
    const { rideId } = req.params

    const ticketData = {
      ...req.body,
      rideId: rideId,
    }

    const ticket = await Ticket.create(ticketData)
  } catch (error) {
    res.status(400).json({
      success: "An error occurred creating the new tickets.",
      error: error.message,
    })
  }
}

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({})
    res.status(200).send({
      success: true,
      count: tickets.length,
      data: tickets,
    })
  } catch (error) {
    res.status(500).json({
      success: "An error occurred getting all tickets.",
      error: error.message,
    })
  }
}

const getTicketsByRideId = async (req, res) => {
  try {
    const { rideId } = req.params
    const tickets = await Ticket.find({ rideId: rideId })
    res.status(200).send({
      success: true,
      count: tickets.length,
      data: tickets,
    })
  } catch (error) {
    res.status(500).json({
      success: "An error occurred getting all tickets.",
      error: error.message,
    })
  }
}

const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
    if (!ticket) {
      return res
        .status(404)
        .send({ success: false, message: "Ticket not found" })
    }
    res.status(200).json({ success: true, data: ticket })
  } catch (error) {
    res.status(500).json({
      success: "An error occurred getting  ticket by id.",
      error: error.message,
    })
  }
}

const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id)
    res.json(ticket)
  } catch (error) {
    res.status(500).json({
      success: "An error occurred deleting a ticket.",
      error: error.message,
    })
  }
}

module.exports = {
  createTicket,
  getAllTickets,
  getTicketsByRideId,
  getTicketById,
  deleteTicket
}
