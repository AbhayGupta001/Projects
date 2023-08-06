const express = require('express');
const router = express.Router();

const { login , signUp } = require('../controllers/Auth');
const { auth , isStudent , isAdmin } = require('../middlewares/auth');

router.post('/login',login);
router.post('/signup',signUp);

//protected routes using middleware for authentication and authorization

//for authentication only
router.get('/test',auth);

//for authentication and authorization
//here we use two middleware => auth -> for authentication , isStudent , isAdmin-> for authorization
// third component we have used is a callback function that is exexuted if request is forwarded successfully from the two middlewares


router.get('/test',auth,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome to protected route for Test"
    });
});

router.get('/student',auth,isStudent,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome to protected route for Students"
    });
});
router.get('/admin',auth,isAdmin,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome to protected route for Admin"
    });
});

module.exports = router;