const { Router } = require('express')
const passport = require('passport')
const router = Router()
const { registerAdmin , adminLogin } = require('../../controllers/apiControllers/adminApiControllers')

router.post('/admin/register', registerAdmin)
router.post('/admin/login', passport.authenticate('local', {session: false}), adminLogin)

module.exports = router