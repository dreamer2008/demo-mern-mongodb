const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const EmployeeModel = require('./models/EmployeeModel');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

// REST API routes
app.get('/employees', (req, res) => {
  EmployeeModel.find()
  .then((employees) => {
    res.json(employees);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({error: 'Error when fetching all employees'});
  });
});

app.get('/employees/:id', (req, res) => {
  EmployeeModel.findById(req.params.id)
  .then((employee) => {
    res.json(employee);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({error: `Error when fetching employee by id ${req.params.id}`});
  });
});

app.post('/employees', (req, res) => {
  console.log(req.body)
  EmployeeModel.create(req.body)
  .then(() => {
    console.log('Employee created successfully');
    res.status(201).json({message: 'Employee created successfully'});
  }).catch((err) => {
    console.log(err);
  });
})

app.put('/employees/:id', (req, res) => {
  EmployeeModel.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    console.log('Employee updated successfully');
    res.status(200).json({message: 'Employee updated successfully'});
  }).catch((err) => {
    console.log(err);
    res.status(500).json({error: `Error when updating employee by id ${req.params.id}`});
  });
});

app.delete('/employees/:id', (req, res) => {
  EmployeeModel.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log('Employee deleted successfully');
    res.status(200).json({message: 'Employee deleted successfully'});
  }).catch((err) => {
    console.log(err);
    res.status(500).json({error: `Error when deleting employee by id ${req.params.id}`});
  });
});



