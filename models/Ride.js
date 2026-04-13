const mongoose = require("mongoose")

const rideSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imageURL: { type: String, required: true },
    type: { type: String, required: true },
    tickets: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Ticket", required: false },
    ],
  },
  { timestamps: true }
)
module.exports = mongoose.model("Ride", rideSchema)
