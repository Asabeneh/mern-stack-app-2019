
require('dotenv').config();
const express = require('express');
const app = express ();
const PORT = process.env.PORT || 5000;
const studentRoute = require('./server/routes/student-routes');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if(err) {
    console.log(err);
    return;
  };
  console.log('Server is connected to MongoDB Database')
})



app.use(cors())
app.use(express.json());
app.use('/api/v1.0', studentRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})