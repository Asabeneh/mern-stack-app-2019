const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  firstName:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  avatar:{
    type:String
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

module.exports = User = mongoose.model('user', userSchema)
