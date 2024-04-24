const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/User')
const session = require('express-session');

require('dotenv').config();

//RNpc0QYLZERzm5ePgBmnr92pHUGSN08D

const uri = process.env.ConnectionString;
const app = express()
app.use(express.static('dist'))
app.use(express.json())
app.use(cors())
app.use(session({
  secret: 'RNpc0QYLZERzm5ePgBmnr92pHUGSN08D', // Replace with your secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to `true` if you are using HTTPS
}));
app.use((req,res,next)=>{
    UserModel.find({}).then(result => {
        result.forEach(note => {
          console.log(note)
        })
      })
    next()
})
mongoose.connect(uri)

app.post("/api/login", (req,res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                
                req.session.userID = user._id.toString()
                console.log(req.session.userID)
                res.json("Success")
                
            } else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record")
        }
    })
})

app.get("/api/comparts", (req,res) => {
  
  if (req.session.userID){
    UserModel.findById(req.session.userID)
    .then(result => res.json(result.comparts))
    .catch(error => res.json(error))
    
  }
  else{
    res.json({error:"Not logged in"})
  }
})

app.post("/api/comparts", (req,res) => {
  console.log(req.body)

  if (req.session.userID){
    UserModel.findByIdAndUpdate(req.session.userID,req.body,{new:true})
    .then(result => {
      res.json(result.comparts)}
    )
    .catch(error => res.json(error))
    
  }
  else{
    res.json({error:"Not logged in"})
  }
})

app.post('/api/register', (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server running!")
})