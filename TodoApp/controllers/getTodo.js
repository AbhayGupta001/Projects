const mongoose = require('mongoose');
const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
    try{
        let todos = null;
        const {id} = req.params;
        console.log(id);
        if(id){
            todos = await Todo.findById({_id:id});
        }
        else{
            todos = await Todo.find({});
        }
        res.status(200).json({
            success:true,
            data:todos,
            message:"All Todos fetched successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);

        //ab error flag bhejo
        res.status(500).json({
            success:false,
            error:'internal server erro',
            message:err.message
        });
    }
}