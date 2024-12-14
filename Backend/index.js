const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const cors = require('cors')

const app = express();
const port = process.env.PORT||8080;
const userRouter = require("./Route/UserRoute")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/abc',userRouter)
mongoose.connect(process.env.MONGOURL)
.then(()=>{
  console.log('connected to mongo')
}).catch((err)=>{
  console.log('error in connecting',err)
})

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})

