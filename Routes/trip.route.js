const express = require("express");
const { TripModel } = require("../Models/trip.model");

const tripRoutes = express.Router();

tripRoutes.get("/", async (req, res) => {
  try {

    const trip = await TripModel.find();
    res.send(trip);
  } catch (error) {
    res.send({ msg: "something wrong ", "error is": error.message });
  }
});

tripRoutes.post("/post", async (req, res) => {
  try {
    const trip = new TripModel(req.body);
    await trip.save();
    res.send({ msg: "Trip is Posted" });
  } catch (error) {
    res.send({ msg: "something wrong ", "error is": error.message });
  }
});

module.exports = {
  tripRoutes,
};
