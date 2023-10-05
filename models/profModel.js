const mongoose = require("mongoose");

// Define a schema for the Professor model
const professorSchema = new mongoose.Schema({
  name: String,
  department: String,
  email: String
});

// Define the Professor model using the schema
const profModel = mongoose.model('professor', professorSchema);
module.exports = profModel;