const { hash } = require('bcryptjs')
const Admin = require('../../models/admin')
const Trainer = require('../../models/trainer')
const User = require('../../models/users')

module.exports = {
  async commonLogin(req, res){
    try{
      const commenUser = req.user
      const accessToken = await commenUser.generateToken('login')
      res.status(200).json({statusCode: 200, commenUser, accessToken: `JWT ${accessToken}`, expiresIn: '12h'})  
    }catch(err){
      return res.status(500).json({ statusCode: 500, message: 'Server Error' })
    }
  },
  async renderChangePassword(req, res) {
    const role = req.user.role
    const { email, oldPassword, newPassword } = {...req.body}
    if (!email || !oldPassword || !newPassword) return res.status(400).json({ statusCode: 400, message: "Bad request"})
    try{
      const hp = await hash(newPassword, 10)
      if (role === 'User'){
        const user = await User.findByEmailAndPassword(email, oldPassword)    
        await user.updateOne({ password: hp })
        res.status(200).json({ statusCode: 200, message: 'Password Changed successfully'})
      }
      if(role === 'Trainer'){
        const trainer = await Trainer.findByEmailAndPassword(email, oldPassword)    
      
        await trainer.updateOne({ password: hp })
        console.log(trainer)
        res.status(200).json({ statusCode: 200, message: 'Password Changed successfully'})
      }
      if(role === 'Admin'){
        const admin = await Admin.findByEmailAndPassword(email, oldPassword)    
        await admin.updateOne({ password: hp })
        res.status(200).json({ statusCode: 200, message: 'Password Changed successfully'})
      }
    }catch(err){
      return res.status(401).json({ statusCode: 401, message: "Incorrect credentials"})
    }
  },
  async renderForgotPasswordEmail(req, res){
    const { perEmail, email } = req.body;
    try {
      // Ask for user details
      // No user. There is no user present in our database .. Kindly register first
      // 1. generateToken()
      // 2. Email sent successfully
      const admin = await Admin.findOne({ perEmail })
      const trainer = await Trainer.findOne({ perEmail })
      const user = await User.findOne({ email });
      if(perEmail){
        console.log(perEmail)
        if(admin){
          await admin.generateToken("trainerReset")
          res.status(200).json({ statusCode:200, message: 'Email sent successfully. Please Check your inbox' })
        }
        if(trainer){
          const trainer = await Trainer.findOne({ perEmail });
          await trainer.generateToken("trainerReset");
          res.status(200).json({ statusCode: 200, message: 'Email sent successfully. Please Check your inbox' })
        }
      }
      else if(email){
        await user.generateToken("reset");
        res.status(200).json({ statusCode: 200, message: "Email sent successfully. Please Check your inbox" });
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: 'Server Error' });
    }
  },
  async renderAllResetPassword(req, res){
    const { resetToken } = req.params
    console.log(resetToken)
    const {newPassword, confirmPassword} = {...req.body}
    const hp = await hash(newPassword, 10)
    try {
      // Finding the user with the help of token
      const admin = await Admin.findOne( { resetToken } );
      const trainer = await Trainer.findOne( { resetToken:resetToken } );
      console.log(trainer)
      const user = await User.findOne( { resetToken } );
      if( newPassword !== confirmPassword )return res.status(400).json({ statusCode: 400, message: 'Password Do not match' })
      if(admin){
        await admin.updateOne({password: hp, resetToken: ""})
        admin.save()
        res.status(200).json({ statusCode: 200, message: 'newPassword set successfully' })
      }
      else if(trainer){
       const u = await trainer.updateOne({password: hp, resetToken: ""})
        console.log(u)
        trainer.save()
        res.status(200).json({ statusCode: 200, message: 'newPassword set successfully' })  
      } 
      else if(user){
        await user.updateOne({password: hp, resetToken: ""})
        user.save()
        res.status(200).json({ statusCode: 200, message: 'newPassword set successfully' })
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: 'Server Error' });
    }
  },
  async renderConfirmEmail(req, res){
    const { confirmToken } = req.params;
    try {
      // Finding the user with the help of token
      const user = await User.findOne({ confirmToken });
      const trainer = await Trainer.findOne({ confirmToken });
      if(user){
        await user.updateOne({ isConfirm: true, confirmToken: "" })
        res.status(200).json({ statusCode: 200, message: 'Email Confirmed successfully...!!! You can log in now' })
      }
      if(trainer){
        await trainer.updateOne({ isConfirm: true, confirmToken: "" })
        res.status(200).json({ statusCode: 200, message: 'Email Confirmed successfully...!!! You can log in now' })
      }
    } catch (err) {
      res.status(401).json({ statusCode: 401, message: "Invalid Credentials" })
    }
}
}