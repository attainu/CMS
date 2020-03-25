const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const adminSchema = new Schema({
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
    resetToken:{
        type: String,
        trim: true
    },
    isConfirm:{
        type: Boolean,
        default: true,
    },
    role:{
        type: String,
        default: 'Admin'
    }
},
{timestamps: true})

adminSchema.pre('save', async function(next){
    const admin = this
    try{
        if(admin.isModified('password')){
            const hp = await hash(admin.password, 10)
            admin.password = hp
            next()
        }
    }catch(err){
        console.log(err.message)
        next(err)
    }
})

adminSchema.methods.generateToken = async function(){
    const admin = this
    const accessToken = await sign({id: admin._id}, process.env.JWT_SECRET_KEY, {expiresIn: '12h'})
        admin.accessToken = accessToken 
    await admin.save()
    return accessToken
}

adminSchema.methods.toJSON = function(){
    const admin = this.toObject()
    delete admin.password
    delete admin.accessToken
    delete admin.__v
    return admin
}


const Admin = mongoose.model('admin', adminSchema)
module.exports = Admin