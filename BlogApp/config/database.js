const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Database Connection Sucessful"))
    .catch((err)=>{
        console.error(err);
        console.log("Failed to connect with database");
        process.exit(1);
    })
}