import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";

//router

const app=express();

//middleware
app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))


mongoose.connect("mongodb://127.0.0.1:27017/SocialMedia_Youtube",{useNewUrlParser: true , useUnifiedTopology:true}).then(()=> app.listen(8000,()=>console.log("Listening")
))
.catch((error)=>console.log(error));

//usage of routes

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)