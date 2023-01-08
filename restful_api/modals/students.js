const express = require("express")
const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase:true,
        trim:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error ("Invalid email")
            }
        }
    },
    mobile:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

const Student = mongoose.model('student', studentSchema);

module.exports = Student