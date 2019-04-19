const { Employee, validation } = require("../models/Emp");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const employee = await Employee.find().sort("id");
  res.send(employee);
});

router.get("/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee)
    return res.status(404).send("Employee with the given ID cannot be found.");
  res.send(employee);
});

router.post("/add", async (req, res) => {
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let employee = new Employee({
    id: req.body.id,
    name: req.body.name,
    dept: req.body.dept,
    skills: req.body.skills
  });

  employee = await Employee.save();
  res.send(employee);
});

router.post("/update/:id", async (req, res) => {
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    {
      id: req.body.id,
      name: req.body.name,
      dept: req.body.dept,
      skills: req.body.skills
    },
    { new: true }
  );
  if (!employee)
    return res.status(404).send("Employee with the given ID cannot be found.");
  res.send(employee);
});

router.delete("/delete/:id", async (req, res) => {
  const employee = await Employee.findByIdAndRemove(req.params.id);
  if (!employee)
    return res.status(404).send("Employee with the given ID cannot be found.");

  res.send(employee);
});

module.exports = router;
