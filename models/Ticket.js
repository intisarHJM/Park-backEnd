const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema(
  {
    num: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    rideName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ride",
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Ticket", ticketSchema)
