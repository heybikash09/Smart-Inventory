import mongoose from "mongoose";
const userScema=new mongoose.Schema({
    shopname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})
export const User=mongoose.model('user',userScema)