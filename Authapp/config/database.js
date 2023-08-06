const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGO_URL , {
        useNewUrlParser : true,
        useUnifiedTopology:true
    })
    .then(console.log('DATABASE CONNECTION SUCCESSFUL'))
    .catch((err)=>{
        console.log('ISSUE IN DATABASE CONNECTION');
        console.log(err);
        process.exit(1);
    });
}