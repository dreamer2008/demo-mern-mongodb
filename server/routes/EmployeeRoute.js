const express = require('express');

const EmployeeRoute = express.Router()

let EmployeeModel = require('../models/EmployeeModel');

// REST API routes
EmployeeRoute.get('/', (req, res) => {
    EmployeeModel.find()
    .then((employees) => {
      res.json(employees);
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: 'Error when fetching all employees'});
    });
  });
  
EmployeeRoute.get('/:id', (req, res) => {
    EmployeeModel.findById(req.params.id)
    .then((employee) => {
      res.json(employee);
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: `Error when fetching employee by id ${req.params.id}`});
    });
  });
  
EmployeeRoute.post('/', (req, res) => {
    console.log(req.body)
    EmployeeModel.create(req.body)
    .then(() => {
      console.log('Employee created successfully');
      res.status(201).json({message: 'Employee created successfully'});
    }).catch((err) => {
      console.log(err);
    });
  })
  
EmployeeRoute.put('/:id', (req, res) => {
    EmployeeModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log('Employee updated successfully');
      res.status(200).json({message: 'Employee updated successfully'});
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: `Error when updating employee by id ${req.params.id}`});
    });
  });
  
EmployeeRoute.delete('/:id', (req, res) => {
    EmployeeModel.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Employee deleted successfully');
      res.status(200).json({message: 'Employee deleted successfully'});
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: `Error when deleting employee by id ${req.params.id}`});
    });
  });

  module.exports = EmployeeRoute;