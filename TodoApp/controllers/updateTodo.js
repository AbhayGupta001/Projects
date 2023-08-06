const Todo = require('../models/Todo');

// ab ek function banao us controller ka aur use export kr do

exports.updateTodo = async (req ,res) => {
    try{
        // data nikalo request ki body se 
        const id = req.params.id;
        const {title , description} = req.body;
        console.log(title,description);
        // ab ek object create kr db main insert kro
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
            );

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