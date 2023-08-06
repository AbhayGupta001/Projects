const Todo = require('../models/Todo');

// ab ek function banao us controller ka aur use export kr do

exports.deleteTodo = async (req ,res) => {
    try{
        // data nikalo request ki body se 
        const id = req.params.id;

        // ab ek object create kr db main insert kro
        const todo = await Todo.findByIdAndDelete({_id:id});

        //send json response with success flag
        res.status(200).json({
            success:true,
            data:todo,
            message:`Entry with ${id} updated successfully`
        });
    }
    catch(err){
        console.error(err);
        console.log(err);

        //ab error flag bhejo
        res.status(500).json({
            success:false,
            data:'internal server erro',
            message:err.message
        });
    }
} ;