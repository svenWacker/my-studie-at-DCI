const mongoose = require("mongoose");
const employeesDataSchema = new mongoose.Schema({
  name: {
    type: String,
    // to trim
    trim: true,
    // to make it required
    required: [true, "Name is must"],
    // unique: true,
  },
  age: {
    type: Number,
    //required: true,
    required: [true, "Write age please"],
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
