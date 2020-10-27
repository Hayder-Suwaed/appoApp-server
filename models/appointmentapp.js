const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  date:{
    type: String
  },
  time:{
    type: String
  }
})

module.exports = mongoose.model('Appointment', appointmentSchema)