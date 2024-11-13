const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, mobile, designation, gender } = req.body;
  
  try {
    const newEmployee = new Employee({
      name,
      email,
      mobile,
      designation,
      gender,
    });

    await newEmployee.save();

    res.json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find(); 
    res.json(employees); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
