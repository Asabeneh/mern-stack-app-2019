
require('dotenv').config();
const express = require('express');
const app = express ();
const PORT = process.env.PORT || 5000;
const path = require('path')
const studentRoute = require('./server/routes/student-routes');
const userRoute = require('./server/routes/user-routes')
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');


mongoose.connect(process.env.MONGODB_URI, (err) => {
  if(err) {
    console.log(err);
    return;
  };
  console.log('Server is connected to MongoDB Database')
})

app.use(passport.initialize());
require('./server/config/passport')(passport);
app.use(cors())
app.use(express.json());
app.use('/api/v1.0', studentRoute);
app.use('/api/v1.0/users',userRoute);
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})