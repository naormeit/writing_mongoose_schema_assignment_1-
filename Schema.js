const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const User_Fields = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type: String,
        required : true,
    },
    roles:{
        type : [string],
        default : ['admin' ],
    },
    profile_field:{
        firstname:{
            type: string
        },
        lastname:{
            type : string
        },
        age:{
            type:Number
        }
    },

    Activity_Tracking:{
        lastLogin:{
            type:Date
        }
    }
})