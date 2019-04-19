const mongoose = require("mongoose");
const Joi = require("joi");

const Employee = mongoose.model(
  "Employee",
  new mongoose.Schema({
    id: {
      type: Number
    },
    name: {
      type: String
    },
    dept: {
      type: String
    },
    skills: {
      type: [String]
    }
  })
);

function validation(emp) {
  const schema = {
    id: Joi.number()
      .min(1)
      .required(),
    name: Joi.string()
      .min(3)
      .required(),
    capacity: Joi.number()
      .min(2)
      .required(),
    skills: Joi.string().min(3)
  };

  return Joi.validate(emp, schema);
}

exports.Dept = Employee;
exports.validate = validation;
