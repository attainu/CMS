const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: function(){
            return !this.isThirdParty
        },
        trim: true
    },
    isThirdParty: {
        type: Boolean,
        default: false,
        required: true
    },
    accessToken:{
        type: String,
        trim: true
    },
    isConfirm:{
        type: Boolean,
        default: false,
    },
    confirmToken:{
        type: String,
        trim: true
    },
    resetToken:{
        type: String,
        trim: true
    }
},
{timestamps: true})



const User = mongoose.model('users', userSchema)
module.exports = User