const EmployeesData = require("../model/employeesModel");
const express = require("express");

// Middleware
// Get one employee by name (only one)
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
// Get one add
const getAdd = async (req, res, next) => {
  // find will get all or with criteria wil get some
  // with limit you can define how many should find get you
  // employee = await EmployeesData.find({ add: req.params.add }).limit(70);
  let employee;
  try {
    employee = await EmployeesData.find({ add: req.params.add });
    if (employee == null) {
      // NOt found
      return res.status(404).json({ message: "Sorry, NOT FOUND." });
    }
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
  res.employee = employee;
  next();
};

// View all Employees

const getAllEmployee = async (req, res) => {
  try {
    // const employees = await EmployeesData.find().select("name age");

    const employees = await EmployeesData.find();
    // 200 for Successful Ok
    // console.log(employees);
    res.status(200).json(
      employees.map((employee) => {
        return {
          employeeId: employee._id,
          employeeName: employee.name,
          age: employee.age,
          Address: employee.add,
          employeeAddedDate: employee.employeeAddedDate,
          request: {
            type: "GET",
            url: `http://localhost:5000/employees/${employee.name}`,
          },
        };
      })
    );
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
};
// Get one Employee upon criteria
const getOneEmployee = async (req, res) => {
  // 200 Successful Ok
  res.status(200).json(res.employee);
};
// PATCH one Employee upon criteria
const updateOneEmployee = async (req, res) => {
  const { name, age, add } = req.body;
  if (name) {
    res.employee.name = name;
  }
  if (age != null) {
    res.employee.age = age;
  }
  if (add) {
    res.employee.add = add;
  }
  try {
    // save
    await res.employee.save();
    res.status(200).json({ message: "Employee updated", data: res.employee });
  } catch (err) {
    // 400 for bad request
    res.status(400).json({ message: err.message });
  }
};
// Add new Employee
const addNewEmployee = async (req, res) => {
  const employee = new EmployeesData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    // save
    const newEmployee = await employee.save();
    // 201 for Successful Created
    res.status(201).json(newEmployee);
  } catch (err) {
    // 400 for Bad request
    res.status(400).json({
      message: err.message,
    });
  }
};
// DELETE one Employee upon criteria
const deleteOneEmployee = async (req, res) => {
  try {
    // remove
    await res.employee.remove();
    // 200 for Successful OK
    res.status(200).json({ message: "Employee Deleted" });
  } catch (err) {
    // 400 for Internal server error
    res.status(500).json({
      message: err.message,
    });
  }
};
// PUT
const updateAllEmployeeData = async (req, res) => {
  try {
    await EmployeesData.updateOne(
      { name: req.params.name },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          add: req.body.add,
        },
        $currentDate: {
          employeeAddedDate: Date.now,
        },
      }
    );
    // 200 OK
    res.status(200).json({ message: "Employee Got updates" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getEmployee,
  getAdd,
  getAllEmployee,
  getOneEmployee,
  updateOneEmployee,
  addNewEmployee,
  deleteOneEmployee,
  updateAllEmployeeData,
};
