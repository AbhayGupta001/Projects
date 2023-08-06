const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const transporter = require('../configs/nodemailer');

const file = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    tags:{
        type:String
    }
});

// this route will actvate when a new entry is saved in the database
file.post('save',async function(docs){
    try{
        const info = await transporter.sendMail({
            from:"Abhay",
            to:docs.email,
            subject:"New File Uploaded on the Cloudinary",
            html:`<h1>File Uploaded</h1><p>View Here: <a href="${docs.imageUrl}">${docs.imageUrl}</a></p>`
        })
        console.log(info);
    }catch(err){
        console.error(err);
    }
})

module.exports = mongoose.model("File",file);