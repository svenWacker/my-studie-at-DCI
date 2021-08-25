const EmployeesData = require("../model/employeesModel");
const express = require("express");

// Middleware
// only one
const getEmployee = async (req, res, next) => {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });
    employee = await EmployeesData.findOne({ name: req.params.name });
    console.log(employee);
    if (employee == null) {
      // NOt found
      return res.status(404).json({ message: "Sorry, employee NOT FOUND." });
    }
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
  res.employee = employee;
  next();
};
