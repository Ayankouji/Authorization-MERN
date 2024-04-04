const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")

// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
const app = express();
dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to DB');
    })

    .catch((err) =>{
        console.log(err.message);
    });
app.get('/',(req,res)=>{
    res.send('Server is Startting ')
})
const port = process.env.PORT || 8000;
app.listen(port,()=>{console.log(`server start at http://localhost:${port}`)})