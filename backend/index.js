const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/User')
require('dotenv').config();


const uri = process.env.ConnectionString;
const app = express()
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    UserModel.find({}).then(result => {
        result.forEach(note => {
          console.log(note)
        })
      })
    next()
})
mongoose.connect(uri)

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record")
        }
    })
})


app.post('/register', (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server running!")
})
