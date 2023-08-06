const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true 
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Admin","Student","Visitor"] // this enum restrict the value space of role to these three valuse i.e. role can have values any one of the three mentioned in enum
    }
});

module.exports = mongoose.model("User",userSchema);