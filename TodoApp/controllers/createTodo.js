const { response } = require('express');
const Todo = require('../models/Todo');

// ab ek function banao us controller ka aur use export kr do

exports.createTodo = async (req ,res) => {
    try{
        // data nikalo request ki body se 
        const {title , description} = req.body;
        console.log(title,description);
        // ab ek object create kr db main insert kro
        const response = await Todo.create({title , description});

        //send json response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created successfully'
        });
    }
    catch(error){
        console.error(error);
        console.log(error);

        //ab error flag bhejo
        res.status(500).json({
            success:false,
            data:'internal server erro',
            message:error.message
        });
    }
} ;