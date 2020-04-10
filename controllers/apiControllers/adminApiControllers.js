const Admin = require('../../models/Admin')
const { validationResult } = require('express-validator')
module.exports = {
    async registerAdmin(req, res){
        try{
            const error = validationResult(req)
            if(!error.isEmpty()){
                return res.status(400).json({statusCode: 400, message: error.array()})
            }
            const { email, perEmail, name, password } = req.body;
            if (!email || !perEmail|| !name || !password) {
                return res.status(400).json({ statusCode: 400, message: "Bad request" });
            }
            const check = await Admin.findOne({email})
            if(check) return res.status(401).json({statusCode: 401, message: 'Bad request Email Already exist...!!!'})
            const admin = await Admin.create({ email, name, password, perEmail });
            return res.status(201).json({statusCode: 201, admin});
        }catch(err){
            return res.status(500).json({ statusCode: 500, message: 'Server Error' })
        }
    }
}