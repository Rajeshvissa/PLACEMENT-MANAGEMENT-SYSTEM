const express = require('express');
const studentRoute  = require('./controller/studentRoute');
const app=express();
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const cors=require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://rajesh22bce9664:12345@cluster0.r1srbbb.mongodb.net/Schooldb");




var db=mongoose.connection;
db.on('open',()=>{
    console.log("DB connected");
})

db.on('error',()=>{
    console.log("DB not connected");
})
app.use('/studentRoute',studentRoute);


app.listen(9000,()=>{
    console.log("Server got created at port 9000");
})