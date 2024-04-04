import User from "../Models/User";
import bcrypt from "bcryptjs"
import { generateLogToken } from "../utils";

// const express = require("express");
// const bcrypt = require("brcyptjs");

const router = express.Router();
//For Create User
router.post("/register",
async(req,res)=>{
    let user = await User.finfOne({email : req.body.email});
    if (user)
    return res.send("User with Given email is existing! ");

 user = new User({
    fullname:req.body.fullname,
    email:req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
}).save();

//For Login
router.post("/login",
async(req,res)=>{
    const user = await User.findOne({email:req.body.email});
    if (bcrypt.compare(req.body.password, user.password))
    {
        res.send(
            {
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
                password:user.password,
                token:generateLogToken(user),
            }
        )
    }
});



res.send(user);
}
)