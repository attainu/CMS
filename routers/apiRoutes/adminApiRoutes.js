const passport = require('passport')
const { Router } = require('express')
const router = Router()
const { registerAdmin } = require('../../controllers/apiControllers/adminApiControllers')

router.post('/admin/register', registerAdmin)

module.exports = router