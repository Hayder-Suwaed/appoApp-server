const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointmentapp");

// Getting all

let a = {
  fullName: "Hayder Suwaed",
  email: "haiderhachim87@yahoo.com",
  mobile: "5874293227",
  city: "Calgary",
  date: 55555555,
};

router.get("/", async (req, res) => {
  try {
    const subscribers = await Appointment.find();

    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Creating one
router.post("/appointment", async (req, res) => {
  const Appointmentinfo = new Appointment({
    id: req.body.id,
    name: req.body.name,
    time: req.body.time,
    email: req.body.email,
    date: req.body.date,
  });
  try {
    console.log(Appointmentinfo);
    const newAppointment = await Appointmentinfo.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
