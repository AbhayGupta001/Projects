const Path = require('path');
const cloudinary = require('cloudinary').v2;
const File = require('../models/FIle');

exports.localFileUpload = async (req,res)=>{
    try{
        //parsing file from files folder in file
        const file = req.files.file;
        console.log(file);

        //defining the path at which file will be stored in server
        let path = Path.join(__dirname, "/files/", `${Date.now()}.${file.name.split('.')[1]}`);
        console.log("Path-> ",path);
        
        //copying or saving or moving the received file in the given path 
        file.mv(path,(err)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:false
                });
            }
            else{
                console.log("Successful upload");
            }

        });

        res.status(200).json({
            success:true,
            message:"file received successfully"
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"file not received"
        });
    }
}

//uploading files on cloudinary

function isSupportedFile(type,supportedType){
    return supportedType.includes(type);
}

async function uploadToCloudinary(file,folder,qaulity){
    const options = {folder};
    if(qaulity){
        options.qaulity = qaulity;
    }
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath , options);
}


//image file upload to cloudinary
exports.imageUpload = async (req,res)=>{
    try{
        //fetching data 
        const {name , email , tags} = req.body;
        const file = req.files.imageFile;
        // console.log(file);

        //now cheking the supported file type
        const supportedType = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        //checking fro supported file format 
        //if not supported then return false
        if(!isSupportedFile(fileType,supportedType)){
            return res.status(401).json({
                success:false,
                message:"File format not supported"
            });
        }
        
        //if yes then upload to cloud
        //it is user defined function , main function is called in the definition of this function above
        const response = await uploadToCloudinary(file,"FileUpload");
        console.log(response);

        const fileData = await File.create({
            name,
            email,
            tags,
            imageUrl:response.secure_url
        });

        res.status(200).json({
            success:true,
            imageUrl:response.secure_url,
            message:"File Uploaded Successfully"
        });

    } catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Something went wrong!!"
        });
    }
}

//video file upload to cloudinary
exports.videoUpload = async (req,res)=>{
    try{
        //fetching data 
        const {name , email , tags} = req.body;
        const file = req.files.videoFile;
        // console.log(file);

        //now cheking the supported file type
        const supportedType = ["mp4","mov"];
        const fileType = file.name.split('.')[1].toLowerCase();

        //checking fro supported file format 
        //if not supported then return false
        if(!isSupportedFile(fileType,supportedType) || file.size > 5*1024*1024){
            return res.status(401).json({
                success:false,
                message:"File format not supported"
            });
        }
        
        //if yes then upload to cloud
        //it is user defined function , main function is called in the definition of this function above
        const response = await uploadToCloudinary(file,"FileUpload",30);
        // console.log(response);

        const fileData = await File.create({
            name,
            email,
            tags,
            imageUrl:response.secure_url
        });

        res.status(200).json({
            success:true,
            imageUrl:response.secure_url,
            message:"File Uploaded Successfully"
        });

    } catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Something went wrong!!"
        });
    }
}

exports.imageSizeReduceUpload = async(req,res) => {
    try{
        //fetching data 
        const {name , email , tags} = req.body;
        const file = req.files.imageFile;
        // console.log(file);

        //now cheking the supported file type
        const supportedType = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        //checking fro supported file format 
        //if not supported then return false
        if(!isSupportedFile(fileType,supportedType)){
            return res.status(401).json({
                success:false,
                message:"File format not supported"
            });
        }
        
        //if yes then upload to cloud
        //it is user defined function , main function is called in the definition of this function above
        const response = await uploadToCloudinary(file,"FileUpload",70);
        console.log(response);

        const fileData = await File.create({
            name,
            email,
            tags,
            imageUrl:response.secure_url
        });

        res.status(200).json({
            success:true,
            imageUrl:response.secure_url,
            message:"File Uploaded Successfully"
        });
    } catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Something went wrong!!"
        });
    }
}