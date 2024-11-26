const userModel = require('../Model/UserModel');
const bcrypt  = require("bcrypt")
const jwt = require("jsonwebtoken")

const register=async(req,res)=>{
//   console.log("req",res)
//   const mySalesData = await userModel.find()
//   if(!user){
//     res.status(404).json("page not found")
//   }
//   else{
//     res.status(200).json(mySalesData)
//   }
const data = await userModel.find();
    res.status(200).json(data)
}

const save= async(req,res)=>{
  const {name,email,password,dob} = req.body

  if(!(name && email && password)){

    res.status(404).json({message:"all fields are required"})
  }
  const userEmail = await userModel.findOne({email})
  if(userEmail){
    return res.status(400).json({message: "email already exist"});
  }


  const salt = bcrypt.genSaltSync(10);
  console.log(`>>>>>>>>>salt>>>>>>>`,salt);
  const hash = bcrypt.hashSync(password,salt);
  console.log('hash',hash)
  const data = {
    name,
    email,
    password: hash,
    dob,
  }

  
  const userdata= await userModel(data)
  userdata.save()
    res.status(200).json(userdata) 

}

const deleteUser = async(req,res)=>{
  const {id} = req.params;
  const user = await userModel.findByIdAndDelete(id);
  if(!user){
    res.status(404).json("page not found")
  }
  else{
    res.status(200).json(user)
  }
  
}

const updateUser = async(req,res)=>{
  const { id } = req.body;
  const data = req.body;
  const user = await userModel.findByIdAndUpdate(id,data)
  if(!user){
    res.status(404).json("page not found")
  }
  else{
    res.status(200).json(user)
  }
}

const login = async(req,res)=>{
  const {email,password} =req.body
  const userEmail = await userModel.findOne({email})
  if(!userEmail){
    return res.status(400).json({message:"please signup"})
  }
  const dateBasePassword = userEmail.password
  const match = await bcrypt.compare(password,dateBasePassword);
  if(!match){
    return res.status(400).json({message:"invalid passwod"})
  }
  const token = jwt.sign(

  )
}

module.exports={register, save, deleteUser,updateUser,login};