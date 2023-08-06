const Like = require('../models/Like');
const Post = require('../models/Post');

exports.likePost = async (req,res) =>{ 
    try{
        const {post,user} = req.body;

        const like = new Like({
            post,user
        });

        const savedLike = await like.save();
        
        //post ke likes wale array main bhi update krna padega id ko
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes:savedLike._id } },
            { new:true }
        ).populate("likes");

        res.json({
            post: updatedPost
        });

    }
    catch(err){
        console.log("issue in liking the post");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message
        });
    }
}

exports.unlikePost = async (req,res) =>{ 
    try{
        const {post,like} = req.body;

        const deletedLike = await Like.findOneAndDelete({post:post , _id:like});
        
        //post ke likes wale array main bhi update krna padega id ko
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes:deletedLike._id } },
            { new:true }
        ).populate("likes");

        res.json({
            post: updatedPost
        });

    }
    catch(err){
        console.log("issue in unliking the post");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message
        });
    }
}