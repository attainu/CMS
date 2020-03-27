const Trainer = require('../../models/trainer')
module.exports = {
    async trainerConfirmEmail(req, res){
        const { confirmToken } = req.params;
        try {
          // Finding the user with the help of token
          const trainer = await Trainer.findOne({ confirmToken });
          if (!trainer) return res.status(401).send("Invalid Credentials")
          await trainer.updateOne({ isConfirm: true, confirmToken: "" })
          res.status(200).json({ statusCode: 200, message: 'Email Confirmed successfully...!!! You can log in now' })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}