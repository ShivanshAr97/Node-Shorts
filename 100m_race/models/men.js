const express = require("express")
const mongoose = require("mongoose")

const menSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase:true,
        trim:true,
        minlength:3
    },
    ranking:{
        type:Number,
        unique:true
    },
    dob:{
        type:Date,
        required:true,
        default:Date.now
    },
    country:{
        type:String,
    },
    score:{
        type:Number,
        required:true
    },
    event:{
        type:String,
        default:"100 m"
    }
})

const Men = mongoose.model('men', menSchema);

module.exports = Men