
const {model}=require("mongoose")

const customers = new mongoose.Schema({
  
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  DOB:{
    type:Date,
    require:true
  },
});


const form = mongoose.model("form",customers)
module.exports = form;