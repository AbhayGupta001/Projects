const express = require('express');
const { connectDb } = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

const blogRoutes = require("./routes/blog");
app.use("/api/v1",blogRoutes);

app.listen(PORT , ()=>{
    console.log("Server started successfully at PORT ",PORT);
});

connectDb();

app.get('/',(req,res)=>{
    res.send("<h1>This is Home Page </h1>");
});


