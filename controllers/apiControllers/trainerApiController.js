const Trainer = require('../../models/trainer')
const { hash } = require('bcryptjs')
module.exports = { 
    async registerTrainer(req, res){
        try{
            if(req.user.role === 'Admin'){
                const adminId  = req.user._id
                const { email, perEmail, name, password } = req.body;
                if (!email || !perEmail || !name || !password || !adminId) {
                    return res.status(400).json({ statusCode: 400, message: "Bad request" });
                }
                const trainer = await Trainer.create({ email, name, password, perEmail, adminId });
                await trainer.generateToken({mode:'trainerConfirm', email: email, password: password });
                res.status(201).json({statusCode: 201, confirmation: 'Confrmation Email has been sent successfully please check your mail to confrim the Account.'});
            }
        }catch(err){
            console.log(err)
            return res.status(500).json({ statusCode: 500, message: 'Server Error' })
        }
    },
    async trainerForgotPasswordEmail(req, res){
        const { email } = req.body;
        if (!email) return res.status(400).json({ statusCode: 400, message: 'Email is required' });
        try {
          // Ask for user details
          // No user. There is no user present in our database .. Kindly register first
          // 1. generateToken()
          // 2. Email sent successfully
          const trainer = await Trainer.findOne({ email });
          if (!trainer) {return res.status(400).json({ statusCode: 400, message: 'There is no user present. Kindly register First' })}
          await trainer.generateToken("trainerReset");
          res.status(200).json({ statusCode: 200, message: 'Email sent successfully. Please Check your inbox' })
        } catch (err) {
          console.log(err);
          res.status(500).json({ statusCode: 500, message: err.message })
        }
    },
    async trainerResetPassword(req, res){
        const { resetToken } = req.params
        const {newPassword, confirmPassword} = {...req.body}
        const hp = await hash(newPassword, 10)
        try {
          // Finding the user with the help of token
          const trainer = await Trainer.findOne( { resetToken } );
          if (!trainer){ return res.status(401).json({ statusCode: 401, message: 'Invalid Credentials' })}
          else if( newPassword !== confirmPassword )return res.status(401).json({ statusCode: 401, message: 'Incorrect credentials' })
          await trainer.updateOne({password: hp, resetToken: ""})
          trainer.save()
          res.status(200).json( { statusCode: 200, message: 'NewPassword set successfully' })
        } catch (err) {
          console.log(err)
          res.status(500).json({ statusCode: 500, message: 'Server Error' })
        }
    },
    async trainerChangePassword(req, res){
      const { email, oldPassword, newPassword } = {...req.body}
      const hp = await hash(newPassword, 10)
      if (!email || !oldPassword || !newPassword) return res.status(400).json({ statusCode: 400, message: "Bad request"})
      try{
        const trainer = await Trainer.findByEmailAndPassword(email, oldPassword)
            if (!trainer) return res.status(401).json({ statusCode: 401, message: 'Incorrect credentials' })
            await trainer.updateOne({ password: hp })
            res.status(200).json({ statusCode: 200, message: 'Password Changed successfully' })
      }catch(err){
        res.status(401).json({ statusCode: 401, message: 'Incorrect credentials' })
      }
    },
    async deletePFTrainer (req, res){
      const { trainerId } = req.params
        try{
            if(req.user.role === 'Admin'){
                const trainer = await Trainer.deleteOne({ _id: trainerId })
                if(!trainer) { return res.status(400).json({ statusCode: 400, message: 'No Such trainer exist' }) }
                  res.status(200).json({ statusCode: 200, message: 'Trainer fired successfully' })
            }
        }catch(err){
            console.log(err)
            throw err    
        }
    }
}