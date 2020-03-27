const passport = require('passport')
const { Router } = require('express')
const router = Router()
const { trainerConfirmEmail } = require('../../controllers/normalControllers/trainerNormalController')

router.get("/trainer/confirm/:confirmToken", trainerConfirmEmail)

module.exports = router