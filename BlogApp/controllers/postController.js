const Post = require("../models/Post");
const Like = require("../models/Like");
const Comment = require("../models/Comment");

exports.createPost = async(req,res) =>{
    try{
        const {title,body} = req.body;

        const post = new Post({
            title,body
        });

        const savedPost = await post.save();

        res.status(200).json({
            success:true,
            post:savedPost,
            message:"Post created Successfuly"
        });
    }
    catch(err){
        console.log("issue in creating the post");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message
        });
    }
}

exports.getPost = async(req,res) =>{
    try{
        const posts = await Post.find({}).populate("comments").populate("likes");

        res.status(200).json({
            success:true,
            post:posts,
            message:"Post fetched Successfuly"
        });
    }
    catch(err){
        console.log("issue in fetching the post");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message
        });
    }
}