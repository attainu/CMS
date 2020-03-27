const passport = require('passport')
const { Router } = require('express')
const router = Router()
const { commonLogin,
        renderChangePassword,
        renderForgotPasswordEmail,
        renderAllResetPassword } = require('../../controllers/apiControllers/commonControllers')
const { registerUser, 
        createUserPassword } = require('../../controllers/apiControllers/userApiControllers')

router.post('/user/register', registerUser)
router.post('/login', passport.authenticate('local', {session: false}), commonLogin)
router.post('/forgot-password', renderForgotPasswordEmail)
router.post('/reset/:resetToken', renderAllResetPassword)
router.post('/change-password', passport.authenticate('jwt', {session: false}), renderChangePassword)
router.post('/user/crteate-password', passport.authenticate('jwt', {session: false}), createUserPassword)

module.exports = router