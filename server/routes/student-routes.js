const express = require('express');
const studentRoute = express.Router();
const Student = require('../models/Student');
const jwt = require('jsonwebtoken');
const passport = require('passport')

studentRoute.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('Home page ')
});
studentRoute.get('/students', (req,res) => {
      Student.find({}, (err, students) => {
        if (err) {
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
studentRoute.put('/students/:id', (req, res) => {
  const _id = req.params.id;
  const {name, country, age, bio} = req.body;
  Student.findOne({_id}, (err, student) => {
    if(err) {
      return res.status(400).send('Error')
    }
    student.name = name;
    student.country = country;
    student.age = age;
    student.bio = bio;
    student.save ().then(student => {
      res.send('Saved')
    })
    .catch(error => console.log(error))
  })

});

studentRoute.delete('/students/:id', (req, res) => {
  const _id = req.params.id;
  Student.deleteOne({_id}, (err, student) => {
    if(err) {
      return res.status(400).send('Error')
    }
    res.send('A student has been deleted')
 
  })

})


function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    //Split at the space
    const bearer = bearerHeader.split(' ');
    //Get token from an array
    const bearerToken = bearer[1];
    //set the token
    console.log('bearerToken', bearerToken);
    req.token = bearerToken;
    //Next middleware
    next();
  } else {
    return res.status(403).json({ message: 'Accessed denied' });
  }
}





module.exports = studentRoute; 