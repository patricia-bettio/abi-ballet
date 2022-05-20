const mongoose = require("mongoose");

//SCHEMA
const Schema = mongoose.Schema;
const studentsSchema = new Schema({
  name: String,
  representative: String,
  age: String,
  email: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

//MODELS
const AddStudents = mongoose.model("AddStudents", studentsSchema);

module.exports = AddStudents;
