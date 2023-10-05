const { TimePicker } = require('antd');
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  studemail: {
    type: String,
    required: true,
  },
  receiveremail: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  starttime: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });

const appointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = appointmentModel;
