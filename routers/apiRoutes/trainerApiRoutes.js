const passport = require('passport')
const { Router } = require('express')
const router = Router()
const { registerTrainer, 
        deletePFTrainer } = require('../../controllers/apiControllers/trainerApiController')

router.post('/add/trainer', passport.authenticate('jwt', {session: false}), registerTrainer)
router.delete('/delete/trainer/:trainerId', passport.authenticate('jwt', {session: false}), deletePFTrainer)
module.exports = router