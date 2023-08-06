const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
const cookiePrser = require('cookie-parser');
app.use(cookiePrser());

require('./config/database').connect();

//Mounting
const user = require('./routes/user');
app.use('/api/v1',user);

app.listen(PORT,()=>{
    console.log('Server Started at PORT ',PORT,' succesfully');
})

app.get('/',(req,res)=>{
    res.send("<h1>This is Home Page BETE</h1>");
});
