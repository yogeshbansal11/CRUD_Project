const mongoose = require('mongoose')

const customers = new mongoose.Schema({

  name:{
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
  DOB:{
    type:Date,
   
  },
});

module.exports = mongoose.model('customers',customers)