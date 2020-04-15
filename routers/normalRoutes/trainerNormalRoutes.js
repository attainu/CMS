const passport = require('passport')
const { Router } = require('express')
const router = Router()
const { trainerConfirmEmail,
        getTrainer,
        singleTrainer } = require('../../controllers/normalControllers/trainerNormalController')

router.get("/trainer/confirm/:confirmToken", trainerConfirmEmail)
router.get('/allTrainer', getTrainer)
router.get('/single/trainer/:trainerId' , singleTrainer )
module.exports = router