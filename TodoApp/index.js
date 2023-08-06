const express = require('express');
const app = express();

// middle ware lagaya is baar epress ka na ki body parser ka 
app.use(express.json());

require('dotenv').config();
//agar .env se koi port na mile toh false ho jayega aur check krega ki koi doosr port no toh nhi pada
const PORT = process.env.PORT || 4000;

// Routes import kr liye ab 
const todoRoutes = require('./routes/todo');
// Routes ko append kr diya hierarchy api versioning ke liye 
app.use("/api/v1",todoRoutes);

// server ko live kr diya 
app.listen(PORT,()=>{
    console.log("Server started at port no",PORT,"successfully");
});

// db se connection
const dbConnect = require('./config/database');
dbConnect();

// default route bana diya 
app.get('/',(req,res)=>{
    res.send("<h1>This is HOME PAGE</h1>");
});