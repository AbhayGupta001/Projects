const Comment = require("../models/Comment");
const Post = require("../models/Post"); 

exports.createComment = async (req,res)=>{
    try{
        const {post,user,body} = req.body;

        //object bana liya Comment colletion ka
        const comment = new Comment({
            post,user,body
        });

        // fir us object ki entry Comment collection main krdi
        const savedComment = await comment.save();
        
        //ab post mmain comment arrays main id update krdi is comment ki
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments:savedComment._id } },
            { new: true }
        ).populate("comments");

        res.json({
            post:updatedPost
        });
    }
    catch(err){
        console.log("issue in commenting the post");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message
        });
    }
}