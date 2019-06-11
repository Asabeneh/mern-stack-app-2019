const express = require('express');
const studentRoute = express.Router();
const Student = require('../models/Student');


studentRoute.get('/', (req, res) => {
  res.send('Mern Applicaton')
});
studentRoute.get('/students', (req,res) => {
 Student.find({}, (err, students) => {
   if(err){
     return res.status(404).send('Students not found')
   }
   res.json(students)
 })

})

studentRoute.get('/students/:id', (req, res) => {
  const id = req.params.id;
  Student.findOne({_id:id}, (err, student) => {
    if(err) {
      return res.status(404).send('A student was not found')
    }
    res.json(student)
  });

})

studentRoute.post('/students', (req, res) => {
  const createdAt = new Date ();
  req.body.createdAt = createdAt
  const student = new Student(req.body);
  student.save().then(st => {
    res.json(st)
  }).catch(error => console.log(error))
 

})

module.exports = studentRoute; 