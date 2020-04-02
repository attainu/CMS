const passport = require('passport')
const { Router } = require('express')
const router = Router()
const { registerUser,
        createUserPassword } = require('../../controllers/apiControllers/userApiControllers')

router.post('/user/register', registerUser)
router.post('/user/crteate-password', passport.authenticate('jwt', {session: false}), createUserPassword)

module.exports = router