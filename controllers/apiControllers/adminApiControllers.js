const Admin = require('../../models/admin')
const { hash } = require('bcryptjs')
module.exports = {
    async registerAdmin(req, res){
        try{
            const { email, perEmail, name, password } = req.body;
            if (!email || !perEmail|| !name || !password) {
                return res.status(400).send({ statusCode: 400, message: "Bad request" });
            }
            const admin = await Admin.create({ email, name, password, perEmail });
            res.status(201).json({statusCode: 201, admin});
        }catch(err){
            console.log(err)
            return res.status(500).send('Server Error')
        }
    }
}