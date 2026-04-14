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
      required: false,
    },
    // rideName: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Ride",
    //     required: false,
    //   },
    // ],
  },
  { timestamps: true }
)

module.exports = mongoose.model("Ticket", ticketSchema)
