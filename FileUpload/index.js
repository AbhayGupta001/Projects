const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/temp/'
}));

//mounting
const routes = require('./routes/fileUpload');
app.use('/api/v1/upload',routes);

const { dbConnect } = require('./configs/database');
const { cloudinaryConnect } = require('./configs/cloudinary');

dbConnect();
cloudinaryConnect();

app.listen(PORT,(req,res)=>{
    console.log("Server Started at port ",PORT,"succesfully");
});
