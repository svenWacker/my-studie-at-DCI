const mongoose = require("mongoose");
const employeesDataSchema = new mongoose.Schema({
  name: {
    type: String,
    // to trim
    trim: true,
    // to make it required
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  // short way
  add: String,
  employeeAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
// create new collection
module.exports = mongoose.model("EmployeesData", employeesDataSchema);
// work on old collection that we have
// module.exports = mongoose.model("EmployeesData",employeesDataSchema, "EmployeesData");
