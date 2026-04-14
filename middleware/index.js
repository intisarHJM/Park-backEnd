// validate if the fields of creating a ride is there

const validateRide = (req, res, next) => {
  const { name, imageURL, type, tickets } = req.body

  if (
    !name ||
    !imageURL ||
    !type ||
    (tickets !== undefined && !Array.isArray(tickets))
  ) {
    return res.status(400).json({ error: "Missing required fields" })
  }
  next()
}

module.exports = {
  validateRide,
}
