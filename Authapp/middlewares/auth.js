const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req,res,next)=>{
    try{
        console.log("body: ",req.body.token);
        console.log("cookie: ",req.cookies.token);  
        console.log("header: ",req.header("Authorization"));
        //extracting token from req body
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");

        //if no token found then return response token missing 
        if(!token){
            return res.status(401).json({
                success: false,
                message:"Token Missing"
            });
        }

        // if token found then decode the token and get payload from the token if token decoded successfully else err response
        try{
            const payloadAfterDecode = jwt.verify(token,process.env.JWT_SECRET);
            //now the user is authenticated so inserting the decoded token payload in the req for using it at the time of autharization 
            req.user = payloadAfterDecode;
        } catch(err){
            return res.status(401).json({
                success:false,
                message:"Invalid Token"
            })
        }

        //now calling the next middleware for authorizing the user 
        next();

    } catch(err){
        console.log("Authentication Failed");
        console.error(err);
        res.status(500).json({
            success:false,
            message:"User not Authenticated"
        });
    }
}

exports.isStudent = (req,res,next)=>{
    try{
        //checking the role of user to match with the protected route
        if(req.user.role != "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Students"
            });
        }
        next();

    } catch(err){
        return res.status(500).json({
            success:false,
            message:"User Unauthorized"
        });
    }   
}

exports.isAdmin = (req,res,next)=>{
    try{
        //checking the role of user to match with the protected route
        if(req.user.role != "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin"
            });
        }
        next();

    } catch(err){
        return res.status(500).json({
            success:false,
            message:"User Unauthorized"
        });
    } 
}