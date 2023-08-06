const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signUp = async (req , res)=>{
    try{
        const {name, email, password, role} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User Already Exists"
            });
        }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in Hashing Password"
            });     
        }

        const user = await User.create({
            name,email,password:hashedPassword,role
        });

        res.status(200).json({
            success:true,
            message:"User created Successfully"
        });

    }
    catch(err){
        console.log("Internal Server Error");
        console.err(err);

        res.status(500).json({
            success:false,
            message:"User cannot be registered , Please try again later"
        });
    }
}

exports.login = async (req , res)=>{
    try{
        const {email,password} = req.body;
        //validate details
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill complete info"
            });
        }
        
        //now checking for registered user
        let user = await User.findOne({email});
        
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not registered"
            });
        }
        
        //verifying the password recieved from client

        if(await bcrypt.compare(password,user.password)){
            //if password matched with the stored encrypted passsword

            //now creating jwt
            //step1. creating payload
            const payload = {
                email:user.email,
                user:user.__id,
                role:user.role
            }

            //step2 -> call sign function to create a jwt
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn: "2h"
            });

            //now converting user into object, adding token in it and hiding password
            user = user.toObject();
            user.token = token;
            user.password = undefined;

            //now creating and sending cookie and sending data in it as a response
            //3 components of cookie -> name ,data ,options
            //step1. creating options for cookies
            let options = {
                expire: Date(Date.now() + 3*24*60*60*1000), // converting 3 days in to mili second and adding it to current date which tells that at this time and date cookie will expire
                httpOnly:true // client cannot access the cookie so it cannot be modified thus secured
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                user,
                token,
                message:"User Logged In Successfully"
            });
        }
        else{
            return res.status(403).json({
                success:false,
                message:"Password didn't Matched"
            });
        }

    }
    catch(err){
        console.log("Issue in Logging in");
        console.error(err);
        res.status(500).json({
            success:false,
            message:"LogIn failure"
        });
    }
}