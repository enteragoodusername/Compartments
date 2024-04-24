const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    comparts: [{name:String, tasks:Array, color:String}]
})
UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      for (let index = 0; index < returnedObject.comparts.length; index++){
        returnedObject.comparts[index].id = returnedObject.comparts[index]._id.toString()
        delete returnedObject.comparts[index]._id
      }
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel