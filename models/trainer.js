const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trainerSchema = new Schema({
    adminId: {
        type: Schema.Types.ObjectId,
        ref: "admin",
        required: true
    },
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
    perEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    accessToken:{
        type: String,
        trim: true
    },
    confirmToken:{
        type: String,
        trim: true
    },
    resetToken:{
        type: String,
        trim: true
    },
    isConfirm:{
        type: Boolean,
        default: false,
    },
    role:{
        type: String,
        default: 'Trainer'
    }
},
{timestamps: true})



const Trainer = mongoose.model('trainer', trainerSchema)
module.exports = Trainer