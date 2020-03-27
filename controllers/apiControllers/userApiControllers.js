const User = require('../../models/users')
const { hash } = require('bcryptjs')
module.exports = {
    async registerUser(req, res){
        try{
            const { email, name, password } = req.body;
            if (!email || !name || !password) {
                return res.status(400).json({ statusCode: 400, message: "Bad request" });
            }
            const user = await User.create({ email, name, password });
            await user.generateToken('confirm');
            res.status(201).json({statusCode: 201, confirmation: 'Confrmation Email has been sent successfully please check your mail to confrim the Account.'});
        }catch(err){
            return res.status(500).json({ statusCode: 500, message: 'Server Error'})
        }
    },
    async createUserPassword(req, res){
      const {email, newPassword, confirmPassword} = {...req.body}
      const hp =await hash(newPassword, 10)
      if (!email || !confirmPassword || !newPassword) return res.status(400).json({ statusCode: 400, message: "Bad request"})
      try{
        const user = await User.findOne({email: email})
        if (!user) return res.status(401).json({ statusCode: 401, message: "Incorrect credentials"})
        if(confirmPassword !== newPassword){
          res.status(400).json({ statusCode: 400, message: 'Password Do not match'})
        }
        await user.updateOne({ password: hp, isConfirm: true })
        res.status(200).json({ statusCode: 200, message: 'Password Created successfully'})
      }catch(err){
        res.status(401).json({ statusCode: 401, message: "Incorrect credentials" })
      }
    }
}