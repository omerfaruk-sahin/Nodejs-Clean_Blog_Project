const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    enum:["student", "teacher", "admin"],
    default: "student"
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  CreateDate: {
    type: Date,
    default: Date.now,
  },

  password: {
    type: String,
    required: true,
  },


});
UserSchema.pre('save',function(next){
    user=this
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password=hash
        next()
    })
})
const User = mongoose.model("User", UserSchema);
module.exports = User;
 